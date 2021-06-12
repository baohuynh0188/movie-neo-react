import { React } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";
import tools from "../tools";

const Navigation = () => {
  let history = useHistory();

  const [state, dispatch] = useStateValue();

  let userLogin = "";
  if (localStorage.getItem("token")) {
    userLogin = tools.parseJwt(localStorage.getItem("token")).sub;
  } else {
    userLogin = "";
  }

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: ACTION_TYPE.SIGN_OUT });
    history.push("/login");
  };

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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/recommend">
                Recommend
              </NavLink>
            </li>

            {!state.isSignIn ? (
              <>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link " to="/profile">
                    {userLogin}
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
