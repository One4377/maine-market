import "./Aside.scss";

import { NavLink } from "react-router-dom";
import AvatarIcon from "../images/avatar.png";

export default function Aside() {
  return (
    <div className="Aside">
      <div className="user">
        <img src={AvatarIcon} alt="img" />
        <div className="name">Savannah Nguyen</div>
      </div>
      <div className="total">
        <div className="balance">Balance:</div>
        <div className="sum">$948.55</div>
      </div>
      <hr />
      <div className="items">
        {/* <NavLink className="item" to="#">
            Добавить товар
          </NavLink> */}
        <NavLink className="item" to="/catalog">
          Каталог
        </NavLink>
        <NavLink className="item" to="/profile">
          Профиль
        </NavLink>
        {/* <NavLink className="item" to="#">
            Мои товары
          </NavLink>
          <NavLink className="item" to="#">
            Лист заявок
          </NavLink> */}
        <NavLink className="item" to="/wallet">
          Кошелек
        </NavLink>
      </div>
    </div>
  );
}
