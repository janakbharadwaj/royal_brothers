import React from "react";
import { Route, Switch } from "react-router-dom";
import { RoyalbrotherX } from "../RoyalbrotherX/RoyalbrotherX";
import { Tarrif } from "../Tarrif/Tarrif";
import { SiteLayout } from "./Components/SiteLayout";

function LeftDrawer() {
  return (
    <>
      <SiteLayout>
        <Switch>
          <Route path='/tarrif' exact render={()=><Tarrif/>}/>
          <Route path='/royalbrothersX' exact render={()=><RoyalbrotherX/>}/>
        </Switch>
      </SiteLayout>
    </>
  );
}

export { LeftDrawer };
