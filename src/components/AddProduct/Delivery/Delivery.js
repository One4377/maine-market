import "./Delivery.scss";

import { Link } from "react-router-dom";

import Select from "../../Select/Select";
import Button from "../../Button/Button";
import { Stock } from "../../Stock";

function Delivery() {
  const TEST = [
    { value: "TEST1", label: "TEST1" },
    { value: "TEST2", label: "TEST2" },
  ];

  return (
    <div className="Delivery">
      <div className="title">Добавление нового товара</div>
      <div className="description">Информация о доставке</div>
      <div className="columns">
        <div className="column">
          <div className="about">Куда:</div>
          <input type="text" disabled placeholder="Склад" />
        </div>
        <div className="column">
          <div className="about">Откуда:</div>
          <Select
            isSearchable={false}
            placeholder={"Способ доставки"}
            isClearable={false}
            //   value={selectedMarket}
            //   onChange={setSelectedMarket}
            options={TEST}
          />
          <Select
            isSearchable={false}
            placeholder={"Дата"}
            isClearable={false}
            //   value={selectedMarket}
            //   onChange={setSelectedMarket}
            options={TEST}
          />
        </div>
      </div>
      <Stock />
      <div className="btn-actoins">
        <Link to="/add-product/category-goods">
          <Button variant="blue ">Назад</Button>
        </Link>
        <Link to="/add-product/package">
          <Button variant="primary" className="primary">
            Далее
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Delivery;
