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
import { AtherTestRide } from "../Components/AtherTestRide/AtherTestRide";
import SearchFilter from "../Components/Payment/SearchFilter";

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
        <Route path="/royalbrothersX" exact>
          <RoyalBrosXSearch />
        </Route>

        {/* <Route path="/partnerWithUs" exact>
          <SearchFilter></SearchFilter>
        </Route> */}
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
          <AtherTestRide />
        </Route>
        {/* <Route path="/aboutUs" exact>
          
        </Route>
        <Route path="/reachUs" exact>
          
        </Route> */}
        <Route path="/troll">
          <SearchFilter></SearchFilter>
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
