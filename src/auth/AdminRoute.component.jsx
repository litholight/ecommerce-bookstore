import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, currentUser, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component currentUser={currentUser} {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/signin", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
