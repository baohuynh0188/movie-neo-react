import React from "react";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-4">
          <h1 className="text-center">Login</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                placeholder="Enter username"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your information with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
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
