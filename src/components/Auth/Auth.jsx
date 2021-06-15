import React from "react";
import { Route } from "react-router-dom";

import "./Auth.scss";

import { SignIn, SignUp } from "./";

import { ReactComponent as LogoIcon } from "./images/main-logo.svg";

function Auth() {
  return (
    <div className="Auth">
      <div className="logo">
        <LogoIcon />
        <h2>Hashrate Distribution</h2>
      </div>
      <div className="from">
        <Route path="/sign-in" component={SignIn} />
        <Route  path="/sign-up" component={SignUp} />
      </div>
    </div>
  );
}

export default Auth;
