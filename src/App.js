import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";
import { useStateValue } from "./context/StateProvider";
import { ACTION_TYPE } from "./reducers/reducer";
import { React, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      dispatch({ type: ACTION_TYPE.SIGN_OUT });
    } else {
      dispatch({ type: ACTION_TYPE.SIGN_IN });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>{HandleRoute(routes)}</Switch>
      <Footer />
    </div>
  );
};

const HandleRoute = (routes) => {
  var result = null;
  if (routes.length > 0) {
    result = routes.map((item, index) => {
      return (
        <Route key={index} path={item.path} exact={item.exact}>
          {item.component}
        </Route>
      );
    });
  }
  return result;
};

export default App;
