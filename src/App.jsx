import Home from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/services">
        <Home />
      </Route>
      <Route exact path="/about">
        <Home />
      </Route>
      <Route exact path="/contact">
        <Home />
      </Route>
      <Route exact path="/career">
        <Home />
      </Route>
      <Route exact path="*">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
