import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu/Menu.component";
import Signup from "./components/Signup/Signup.component";
import Signin from "./components/Signin/Signin.component";
import Homepage from "./pages/Homepage/Homepage.component";
import Dashboard from "./pages/Dashboard/Dashboard.component";
import PrivateRoute from "./auth/PrivateRoutes";
import { auth } from "./firebase/firebase.utils";

class Routes extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Menu currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={Dashboard}
            currentUser={this.state.currentUser}
          />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
