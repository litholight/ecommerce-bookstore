import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Menu from "./components/Menu/Menu.component";
import Signup from "./components/Signup/Signup.component";
import Signin from "./components/Signin/Signin.component";
import Homepage from "./pages/Homepage/Homepage.component";
import UserDashboard from "./pages/UserDashboard/UserDashboard.component";
import AdminDashboard from "./pages/Admin/AdminDashboard.component";
import PrivateRoute from "./auth/PrivateRoutes";
import AdminRoute from "./auth/AdminRoute.component";
import AddCategory from "./pages/Admin/AddCategory/AddCategory.component";
import AddProduct from "./pages/Admin/AddProduct/AddProduct.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { isAdmin } from "./utils/utils";

class Routes extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <PrivateRoute
            exact
            path="/user/dashboard"
            component={UserDashboard}
            currentUser={this.state.currentUser}
          />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
            currentUser={this.state.currentUser}
          />
          <AdminRoute
            exact
            path="/create/category"
            component={AddCategory}
            currentUser={this.state.currentUser}
          />
          <AdminRoute
            exact
            path="/create/product"
            component={AddProduct}
            currentUser={this.state.currentUser}
          />
          <Route
            exact
            path="/signin"
            render={() =>
              this.state.currentUser ? (
                <Redirect to={isAdmin(this.state.currentUser.role)} />
              ) : (
                <Signin />
              )
            }
          />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
