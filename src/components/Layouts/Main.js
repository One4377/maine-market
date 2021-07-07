import "./Main.scss"
import cx from "classnames"
import Aside from "./Aside/Aside"
import Header from "./Header/Header"

export default function MainLayout({ children, className }) {
  return (
    <div className={cx("MainLayout", className)}>
      <Aside />
      <Header />
      <div className="MainLayout__content">{children}</div>
    </div>
  )
}
