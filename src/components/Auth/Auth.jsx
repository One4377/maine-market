import React from "react";
import { Route, useHistory } from "react-router-dom";

import "./Auth.scss";

import { SignIn, SignUp } from "./";

import { ReactComponent as LogoIcon } from "./images/main-logo.svg";

function Auth() {
  const { location, push } = useHistory()

  if (location.pathname === "/auth") {
    push("/auth/sign-up")
  }

  return (
    <div className="Auth">
      <div className="logo">
        <LogoIcon />
        <h2>Hashrate Distribution</h2>
      </div>
      <div className="from">
        <Route path="/auth/sign-in" component={SignIn} />
        <Route path="/auth/sign-up" component={SignUp} />
      </div>
    </div>
  );
}

export default Auth;
