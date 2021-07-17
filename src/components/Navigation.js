import { React } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { ACTION_TYPE } from "../reducers/reducer";
import { useForm } from "react-hook-form";
import tools from "../tools";

const Navigation = () => {
  let history = useHistory();
  const { register, handleSubmit } = useForm();
  const [state, dispatch] = useStateValue();

  let userLogin = "";
  if (localStorage.getItem("token")) {
    userLogin = tools.parseJwt(localStorage.getItem("token")).sub;
  } else {
    userLogin = "";
  }

  const onSubmit = (data) => {
    if (data.search !== null) {
      history.push({
        pathname: '/search',
        search: `query=${data.search}`
      });
    }
  };

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
          </ul>
        </div>
        {!state.isSignIn ? (
          <>
            <div className="navbar-text">
              <NavLink exact className="nav-link" to="/register">
                Register
              </NavLink>
            </div>
            <div className="navbar-text">
              <NavLink exact className="nav-link" to="/login">
                Login
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-text">
              <Link className="nav-link " to="/profile">
                {userLogin}
              </Link>
            </div>
            <div className="navbar-text mx-2">
              <button className="btn btn-danger btn-sm" onClick={handleLogout}>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </button>
            </div>
          </>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <input {...register("search", { required: true, maxLength: 20 })} type="text" className="form-control" placeholder="Search something..." maxLength="20" required />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
