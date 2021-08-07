import React from "react";
import { Outlet } from "react-router-dom";

import "./Auth.scss";

import { ReactComponent as LogoIcon } from "./images/main-logo.svg";

function Auth() {
  return (
    <div className="Auth">
      <div className="logo">
        <LogoIcon />
        <h2>Hashrate Distribution</h2>
      </div>
      <div className="from">
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
