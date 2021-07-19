import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Recommend from "./components/Recommend";
import Detail from "./components/Detail";
import Genre from "./components/Genre";
import Profile from "./components/Profile";
import Search from "./components/Search";

const routes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/login",
    component: () => <Login />,
    exact: false,
  },
  {
    path: "/register",
    component: () => <Register />,
    exact: false,
  },
  {
    path: "/recommend",
    component: () => <Recommend />,
    exact: false,
  },
  {
    path: "/profile",
    component: () => <Profile />,
    exact: false,
  },
  {
    path: "/search",
    component: () => <Search />,
    exact: false,
  },
  {
    path: "/genre/:genre",
    component: () => <Genre />,
    exact: true,
  },
  {
    path: "/:slug",
    component: () => <Detail />,
    exact: false,
  },
  {
    path: "",
    component: () => <NotFound />,
    exact: false,
  },
];

export default routes;
