import React from "react";

//router
import { Switch, Route } from "react-router";
//layoutpages
import Index from "../views/index";
import Index2 from "../views/Elite";
import Default from "../layouts/dashboard/default";
import EliteDefault from "../layouts/dashboard/elitedefault";
import Horizontal from "../layouts/dashboard/horizontal";
import Boxed from "../layouts/dashboard/boxed";
import DualHorizontal from "../layouts/dashboard/dual-horizontal";
import DualCompact from "../layouts/dashboard/dual-compact";
import BoxedFancy from "../layouts/dashboard/boxed-fancy";
import Simple from "../layouts/dashboard/simple";
import SignIn from "../views/dashboard/auth/sign-in";
import SignUp from "../views/dashboard/auth/sign-up";
import Verify from "../views/dashboard/auth/verify";
import ChangePassword from "../views/dashboard/auth/changepassword";
import Reset from "../views/dashboard/auth/reset";

const IndexRouters = () => {
  return (
    <>
      <Switch>
        <Route exact path="/auth/sign-in" component={SignIn}></Route>
        <Route exact path="/" component={Index2}></Route>
        <Route path="/dashboard" component={Default}></Route>
        <Route path="/elitedashboard" component={EliteDefault}></Route>

        <Route exact path="/auth/sign-in" component={SignIn} />
        <Route exact path="/auth/sign-up" component={SignUp} />
        <Route exact path="/auth/change-password" component={ChangePassword} />
        <Route exact path="/auth/verify" component={Verify} />
        <Route exact path="/auth/reset" component={Reset} />

        <Route path="/boxed" component={Boxed}></Route>
        <Route path="/horizontal" component={Horizontal}></Route>
        <Route path="/dual-horizontal" component={DualHorizontal}></Route>
        <Route path="/dual-compact" component={DualCompact}></Route>
        <Route path="/boxedFancy" component={BoxedFancy}></Route>
        <Route path="/auth" component={Simple}></Route>
        <Route path="/errors" component={Simple}></Route>
      </Switch>
    </>
  );
};

export default IndexRouters;
