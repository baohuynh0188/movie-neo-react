import React from "react";

const Register = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 my-4">
          <h1 className="text-center">Register</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputUsername">Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputFullname">Full name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputFullname"
                placeholder="Full name"
              />
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
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
