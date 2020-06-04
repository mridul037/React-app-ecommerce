import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./../main/Auth/Login";
import SignUp from "./../main/Auth/Signup";
import ForgotPassword from "./../main/Auth/ForgotPassword";
import Dashboard from "../main/Dashboard/Dashboard";

function MainRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default MainRoutes;
