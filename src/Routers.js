import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NavBar from "./components/NavBar";
import Modeler from "./pages/modeler/Modeler";
import PrivateRoute from "./components/PrivateRoute";
const Routers = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <PrivateRoute path="/modeler/:id?/:slug?" component={Modeler} />
        <Route path="/" exact component={Home} />
        <Route path="/cadastro" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routers;
