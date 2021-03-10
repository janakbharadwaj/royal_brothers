import React from "react";
import { Route, Switch } from "react-router-dom";
import Tarrif from "../../Tarrif/Tarrif";

import { SiteLayout } from "./Components/SiteLayout";

function LeftDrawer() {
  return (
    <>
      <SiteLayout>
        <Switch>
          <Route path='/tarrif' exact render={()=><Tarrif></Tarrif>}/>
        </Switch>
      </SiteLayout>
    </>
  );
}

export { LeftDrawer };
