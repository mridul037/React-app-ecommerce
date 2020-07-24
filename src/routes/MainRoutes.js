import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Dashboard from "../main/Dashboard/Dashboard";
import Cart from '../main/Cart/Cart';
function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Cart" exact component={Cart} />
         </Switch>
    </Router>
  );
}

export default MainRoutes;
