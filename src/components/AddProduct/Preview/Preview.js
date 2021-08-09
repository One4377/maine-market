import "./Preview.scss";

import { Link } from "react-router-dom";

import { CardProductFull, Characteristic } from "../../CardProduct";
import { Stock } from "../../Stock";
import Button from "../../Button/Button";

function Preview() {
  return (
    <div className="Preview">
      <div className="title">Предварительный просмотр</div>
      <CardProductFull />
      <hr />
      <div className="Information">
        <div className="title">Информация о доставке и упаковке</div>
        <div className="columns">
          <div className="column">
            <div className="wrapp">
              <div className="way">Куда:</div>
              <div className="type">Склад:</div>
              <div className="info">
                г. Москва, Звенигородское шоссе, д. 28, стр. 16, 123317
              </div>
            </div>

            <div className="wrapp">
              <div className="way">Откуда:</div>
              <div className="type">Тип доставки</div>
              <div className="info">Курьерсая доставка</div>
            </div>

            <div className="wrapp">
              <div className="type">Пункт приема:</div>
              <div className="info">Пункт приема ООО</div>
            </div>

            <div className="wrapp">
              <div className="type">Адрес склада</div>
              <div className="info">
                г. Москва , Стремяный перулок, д 4 стр. 8
              </div>
            </div>

            <div className="wrapp">
              <div className="type">Зона:</div>
              <div className="info">Пункт приема ООО</div>
            </div>
          </div>

          <div className="column">
            <div className="description"> Информация об упаковке</div>
            <Characteristic
              name={"Тип упаковки"}
              parameter={"Коробки из гофрированного картона"}
            />
            <Characteristic name={"Вес:"} parameter={"12 кг"} />
            <Characteristic name={"Высота:"} parameter={"160 см"} />
            <Characteristic name={"Длина:"} parameter={"80 см"} />
            <Characteristic name={"Ширина:"} parameter={"60 см"} />
          </div>
        </div>
      </div>
      <Stock />
      <div className="btn-actoins">
        <Link to="/add-product/package">
          <Button variant="blue ">Назад</Button>
        </Link>
        <Link to="/add-product/confirmation">
          <Button variant="primary" className="primary">
            Далее
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Preview;
