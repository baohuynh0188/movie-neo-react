import React from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data.username === "admin" && data.password === "admin") {
      localStorage.setItem("user", JSON.stringify(data));
    }
  };
  const loggedUser = localStorage.getItem("user");
  if (loggedUser !== null) {
    return <Redirect to="/" />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-4">
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                {...register("username", { required: true, maxLength: 20 })}
                type="text"
                className="form-control"
                id="exampleInputUsername"
                placeholder="Enter username"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your information with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
