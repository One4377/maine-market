import "./Main.scss";
import cx from "classnames";
import { Outlet } from "react-router-dom";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";


export default function MainLayout({ className, withAside }) {
  return (
    <div className={cx("MainLayout", className)}>
      {withAside && <Aside />}
      <Header  />
      <div className={cx("MainLayout__content", { withAside })}>
        <Outlet />
      </div>
    </div>
  );
}
