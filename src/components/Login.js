import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import userApi from "../api/userApi";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [state, dispatch] = useStateValue();
  const [mess, setMess] = useState(false);

  console.log(state.isSignIn);

  let history = useHistory();

  const onSubmit = async (data) => {
    if (data.username !== null && data.password !== null) {
      try {
        const response = await userApi.login({
          username: data.username,
          password: data.password,
        });
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          dispatch({ type: ACTION_TYPE.SIGN_IN });
          history.push("/");
          console.log(state.isSignIn);
        }
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
          <div className="col-lg-12 my-4">
            <h1 className="text-center">Login</h1>
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
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your information with anyone else.
                </small>
              </div>
              <div className="form-group mb-3">
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
              {mess ? (
                <div className="alert alert-danger mb-3" role="alert">
                  Wrong username or password, please try again
                </div>
              ) : ""}
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Login;
