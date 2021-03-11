import React from "react";
import { Switch, Route } from "react-router-dom";
import Authentication from "../Components/Authentication/Authentication";
import Bikes from "../Components/Bikes/Bikes";
import Home from "../Components/Home/Home";
import Payment from "../Components/Payment/Payment";
import { RoyalBrosXSearch } from "../Components/RoyalBrosX/RoyalBrosXSearch";
import Tarrif from "../Components/Tarrif/Tarrif";

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
          <h2>royal bros search</h2>
        </Route>
        <Route path="/royalbrothersX" exact>
          <RoyalBrosXSearch />
        </Route>
        <Route path="/testRideAther" exact>
          <h2>test ride ather</h2>
        </Route>
        <Route path="/aboutUs" exact>
          <h2>about Us</h2>
        </Route>
        <Route path="/reachUs" exact>
          <h2>reach Us</h2>
        </Route>
        <Route path="/orders" exact>
          <h2>my rides</h2>
        </Route>
        <Route path="/users" exact>
          <h2>my profile</h2>
        </Route>
        <Route path="/authentication" exact>
          <Authentication></Authentication>
        </Route>
        <Route path="/payment" exact>
          <Payment></Payment>
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
