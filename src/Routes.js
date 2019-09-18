import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup.component";
import Signin from "./components/Signin/Signin.component";
import Homepage from "./pages/Homepage/Homepage.component";
import Dashboard from "./pages/Dashboard/Dashboard.component";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
