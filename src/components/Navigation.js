import React from "react";
import { NavLink, Link } from "react-router-dom";

const navs = [
  {
    exact: true,
    to: "/",
    className: "nav-link",
    label: "Home",
  },
  {
    exact: false,
    to: "/register",
    className: "nav-link",
    label: "Register",
  },
  {
    exact: false,
    to: "/login",
    className: "nav-link",
    label: "Login",
  },
];

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand mb-0 h1" to="/">
          Movie Neo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">{HandleNavLink(navs)}</ul>
        </div>
      </div>
    </nav>
  );
};

const HandleNavLink = (nav) => {
  var result = null;
  if (nav.length > 0) {
    result = nav.map((item, index) => {
      return (
        <li className="nav-item">
          <NavLink
            key={index}
            exact={item.exact}
            className={item.className}
            to={item.to}
          >
            {item.label}
          </NavLink>
        </li>
      );
    });
  }
  return result;
};

export default Navigation;
