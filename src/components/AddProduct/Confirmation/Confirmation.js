import "./Confirmation.scss";

import { Link } from "react-router-dom";

import Checkbox from "../../Checkbox/Checkbox";
import Button from "../../Button/Button";

function Confirmation() {
  return (
    <div className="Confirmation">
      <div className="title">Потдверждение</div>
      <div className="description">
        Для того, чтобы продолжить , введите трек номер для отслеживания заказа
      </div>
      <div className="container">
        <input type="text" placeholder="Трек номер" />
        <div className="сonsent">
          <Checkbox />
          <div className="item">
            * Нажимая кнопку «Отправить», я подтверждаю свою дееспособность и
            даю согласие на обработку персональных данных в соответствии с
            правилами использования сайта и политикой конфиденциальности
            персональных данных.
          </div>
        </div>
        <div className="сonsent">
          <Checkbox />
          <div className="item">Согласие на оценку</div>
        </div>
      </div>
      <div className="btn-actoins">
        <Link to="/add-product/preview">
          <Button variant="blue ">Назад</Button>
        </Link>
        <Link to="">
          <Button variant="primary" className="primary">
            Опубликовать
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;
