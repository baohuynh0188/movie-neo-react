import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import userApi from "../api/userApi";

const Register = () => {
  const { register, handleSubmit } = useForm();
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
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {}, []);

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
