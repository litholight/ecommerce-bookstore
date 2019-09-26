import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Menu from "./components/Menu/Menu.component";
import Signup from "./components/Signup/Signup.component";
import Signin from "./components/Signin/Signin.component";
import Homepage from "./pages/Homepage/Homepage.component";
import UserDashboard from "./pages/UserDashboard/UserDashboard.component";
import AdminDashboard from "./pages/Admin/AdminDashboard.component";
import AddProduct from "./pages/Admin/AddProduct/AddProduct.component";
import AddCategory from "./pages/Admin/AddCategory/AddCategory.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import ProductView from "./components/ProductView/ProductView.component";

import PrivateRoute from "./auth/PrivateRoutes";
import AdminRoute from "./auth/AdminRoute.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { isAdmin } from "./utils/utils";
import { createStructuredSelector } from "reselect";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <PrivateRoute
            exact
            path="/user/dashboard"
            component={UserDashboard}
          />
          <AdminRoute
            exact
            path="/admin/dashboard"
            component={AdminDashboard}
          />
          <AdminRoute exact path="/create/category" component={AddCategory} />
          <AdminRoute exact path="/create/product" component={AddProduct} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to={isAdmin(this.props.currentUser.role)} />
              ) : (
                <Signin />
              )
            }
          />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/product/:id" component={ProductView} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
