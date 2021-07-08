import "./Main.scss";
import cx from "classnames";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout({ className }) {
  return (
    <div className={cx("MainLayout", className)}>
      <Aside />
      <Header />
      <div className="MainLayout__content">
        <Outlet />
      </div>
    </div>
  );
}
