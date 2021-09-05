import "./Aside.scss";
import { NavLink } from "react-router-dom";
import { User } from "../../User";

export default function Aside() {
  return (
    <div className="Aside">
      <User />
      <div className="total">
        <div className="balance">Balance:</div>
        <div className="sum">$948.55</div>
      </div>
      <hr />
      <div className="items">
        <NavLink className="item" to="/add-product/category-goods">
          Добавить товар
        </NavLink>
        <NavLink className="item" to="/catalog">
          Каталог
        </NavLink>
        <NavLink className="item" to="/profile/person">
          Профиль
        </NavLink>
        {/* <NavLink className="item" to="#">
          Мои товары
        </NavLink> */}
        <NavLink className="item" to="/application-page">
          Лист заявок
        </NavLink>
        <NavLink className="item" to="/wallet">
          Кошелек
        </NavLink>
      </div>
    </div>
  );
}
