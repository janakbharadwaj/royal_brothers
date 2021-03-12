import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

function AntiPrivateRoute({ to, path, children }) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return isAuth ? (
    <Redirect to="/"></Redirect>
  ) : (
    <Route exact path={path}>
      {children}
    </Route>
  );
}

export default AntiPrivateRoute;
