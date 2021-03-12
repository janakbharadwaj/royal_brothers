import React from "react";
import { Redirect, Route } from "react-router";
import { useSelector } from "react-redux";

function PrivateRoute({ to, path, children }) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return isAuth ? (
    <Route exact path={path}>
      {children}
    </Route>
  ) : (
    <Redirect to={to}></Redirect>
  );
}

export default PrivateRoute;
