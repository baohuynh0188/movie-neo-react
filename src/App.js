import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import routes from "./routes";
import { Route, Switch } from "react-router-dom";

const App = () => {
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
