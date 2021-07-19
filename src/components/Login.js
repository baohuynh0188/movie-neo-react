import { React, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Redirect, useHistory } from "react-router-dom";
import userApi from "../api/userApi";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";

const schema = yup.object().shape({
  username: yup.string().min(3, 'Username must be at least 3 characters').trim("No blank").required("Username is required"),
  password: yup.string().min(8, 'Password must be at least 8 characters').trim("No blank").required("Password is required"),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
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
          <div className="col-lg-6 my-4 mx-auto">
            <h1 className="text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputUsername">Username</label>
                <input
                  {...register("username")}
                  type="text"
                  className={`form-control ${errors.username ? 'is-invalid' : 'is-valid'}`}
                  id="exampleInputUsername"
                  placeholder="Enter username"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your information with anyone else.
                </small>
                <p className="text-danger">{errors.username?.message}</p>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`}
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <p className="text-danger">{errors.password?.message}</p>
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
