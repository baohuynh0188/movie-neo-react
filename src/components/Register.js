import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import userApi from "../api/userApi";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [state, dispatch] = useStateValue();
  const [mess, setMess] = useState(false);
  let history = useHistory();

  const onSubmit = async (data) => {
    if (data.username !== null && data.password !== null) {
      try {
        const response = await userApi.register({
          email: data.email,
          username: data.username,
          name: data.name,
          password: data.password,
        });
        localStorage.setItem("token", response.data.token);
        dispatch({ type: ACTION_TYPE.SIGN_IN });
        history.push("/");
      } catch (error) {
        console.error(error);
        setMess(true);
      }
    }
  };

  if (state.isSignIn === true) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 my-4 mx-auto">
            <h1 className="text-center">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-3">
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
              <div className="form-group mb-3">
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
              <div className="form-group mb-3">
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
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  {...register("password", { required: true, minlength: 8, maxLength: 20 })}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  minLength="8"
                  maxLength="20"
                  required
                />
              </div>
              {mess ? (
                <div className="alert alert-danger mb-3" role="alert">
                  Something went wrong, please try again
                </div>
              ) : ""}
              <button type="submit" className="btn btn-success mt-2">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Register;
