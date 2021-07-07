import "./Header.scss";
import { Link } from "react-router-dom";

import { ReactComponent as HashratelIcon } from "../images/hashrate.svg";

export default function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <Link className="icon" to="/">
          <HashratelIcon />
        </Link>
        Hashrate Distribution
      </div>
    </header>
  );
}
