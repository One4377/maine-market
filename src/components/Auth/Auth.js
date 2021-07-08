import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

import "./Auth.scss";

import { ReactComponent as LogoIcon } from "./images/main-logo.svg";

function Auth() {
  const navigate = useNavigate();

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
