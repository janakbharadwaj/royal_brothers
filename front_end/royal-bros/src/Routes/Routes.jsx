import React from "react";
import { Switch, Route } from "react-router-dom";
import Authentication from "../Components/Authentication/Authentication";
import Bikes from "../Components/Bikes/Bikes";
import Home from "../Components/Home/Home";
import Payment from "../Components/Payment/Payment";
import { RoyalBrosIndBike } from "../Components/RoyalBrosX/RoyalBrosIndBike";
import { RoyalBrosXResults } from "../Components/RoyalBrosX/RoyalBrosXResults";
import { RoyalBrosXSearch } from "../Components/RoyalBrosX/RoyalBrosXSearch";
import Tarrif from "../Components/Tarrif/Tarrif";
import BikePayment from "../Components/Bikes/BikePayment";
import Orders from "../Components/User/Orders";
import Profile from "../Components/User/Profile";
import AntiPrivateRoute from "./AntiPrivateRoute";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/tarrif" exact>
          <Tarrif />
        </Route>
        <Route path="/whatsNew" exact>
          <h1>whats new ?</h1>
        </Route>
        <Route path="/offers" exact>
          <h1>offers</h1>
        </Route>
        <Route path="/partnerWithUs" exact>
          <h1>partner with us</h1>
        </Route>
        <Route path="/search" exact>
          <Bikes />
        </Route>
        <Route path="/royalXSearch" exact>
          <RoyalBrosXResults />
        </Route>
        <Route path="/royalbrothersX" exact>
          <RoyalBrosXSearch />
        </Route>
        <PrivateRoute to="/authentication" path="/royalXSearch/:id" exact>
          <RoyalBrosIndBike />
        </PrivateRoute>
        <Route path="/testRideAther" exact>
          <h2>test ride ather</h2>
        </Route>
        <Route path="/aboutUs" exact>
          <h2>about Us</h2>
        </Route>
        <Route path="/reachUs" exact>
          <h2>reach Us</h2>
        </Route>
        <PrivateRoute to="/authentication" path="/orders">
          <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute to="/authentication" path="/users">
          <Profile></Profile>
        </PrivateRoute>
        <AntiPrivateRoute path="/authentication" exact>
          <Authentication></Authentication>
        </AntiPrivateRoute>
        <PrivateRoute to="/authentication" path="/bikes/payment/:bikePaymentId">
          <BikePayment />
        </PrivateRoute>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
