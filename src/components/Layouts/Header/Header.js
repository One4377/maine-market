import "./Header.scss";
import { Link } from "react-router-dom";

import { ReactComponent as HashrateIcon } from "../images/hashrate.svg";
import { ReactComponent as SearchIcon } from "../images/search.svg";
import { ReactComponent as NotificationIcon } from "../images/notification.svg";
import { ReactComponent as OrderIcon } from "../images/order.svg";
import { ReactComponent as BasketIcon } from "../images/basket.svg";

import { User } from "../../User";

export default function Header() {
  return (
    <header className="Header">
      <div className="logo">
        <Link className="icon" to="/home">
          <HashrateIcon />
        </Link>
        Hashrate Distribution
      </div>
      <div className="search">
        <input type="text" placeholder="Поиск" />
        <SearchIcon />
      </div>

      <div className="interface">
        <Link className="notification" to="">
          <NotificationIcon />
        </Link>

        <div className="my-order">
          <Link className="order" to="orders/completed">
            <OrderIcon />
          </Link>
          Мои заказы
        </div>

        <Link className="basket" to="">
          <BasketIcon />
        </Link>

        <User />
      </div>

      {/* <div className="actions">
        <Link to="/auth/sign-up">
          <Button variant="primary" className="primary">
            Войти
          </Button>
        </Link>
        <Link to="/add-product/category-goods">
          <Button variant="blue ">Разместить объявление</Button>
        </Link>
      </div> */}
    </header>
  );
}
