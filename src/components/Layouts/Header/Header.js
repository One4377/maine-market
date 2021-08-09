import "./Header.scss";
import { Link } from "react-router-dom";

import { ReactComponent as HashratelIcon } from "../images/hashrate.svg";
import { ReactComponent as SearchlIcon } from "../images/search.svg";

import Button from "../../Button/Button";

export default function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <Link className="icon" to="/catalog">
          <HashratelIcon />
        </Link>
        Hashrate Distribution
      </div>
      <div className="search">
        <input type="text" placeholder="Поиск" />
        <SearchlIcon />
      </div>
      <div className="actions">
        <Link to="">
          <Button variant="primary" className="primary">
            Войти
          </Button>
        </Link>
        <Link to="">
          <Button variant="blue ">Разместить объявление</Button>
        </Link>
      </div>
    </header>
  );
}
