import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-4">
          <h1 className="text-center">Register</h1>
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
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFullname">Full name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control"
                id="exampleInputFullname"
                placeholder="Full name"
                required
              />
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
