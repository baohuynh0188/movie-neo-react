import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";

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
    path: "",
    component: () => <NotFound />,
    exact: false,
  },
];

export default routes;
