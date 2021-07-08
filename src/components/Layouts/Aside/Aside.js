import "./Aside.scss";

import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <div className="Aside">
      <div className="close">
        <hr />
        <div className="items">
          <Link className="item" to="#">
            Добавить товар
          </Link>
          <Link className="item" to="/catalog">
            Каталог
          </Link>
          <Link className="item" to="/profile">
            Профиль
          </Link>
          <Link className="item" to="#">
            Мои товары
          </Link>
          <Link className="item" to="#">
            Лист заявок
          </Link>
          <Link className="item" to="#">
            Кошелек
          </Link>
        </div>
      </div>
    </div>
  );
}
