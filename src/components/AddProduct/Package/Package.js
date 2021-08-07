import "./Package.scss";

import Select from "../../Select/Select";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

function Package() {
  const TEST = [
    { value: "TEST1", label: "TEST1" },
    { value: "TEST2", label: "TEST2" },
  ];

  return (
    <div className="Package">
      <div className="title">Добавление нового товара</div>
      <div className="description">Информация об упаковке</div>
      <div className="columns">
        <div className="column">
          <Select
            isSearchable={false}
            placeholder={"Тип упаковки"}
            isClearable={false}
            //   value={selectedMarket}
            //   onChange={setSelectedMarket}
            options={TEST}
          />
        </div>
        <div className="column">
          <input type="text" placeholder="Вес, кг" />
          <input type="text" placeholder="Длина, см" />
        </div>
        <div className="column">
          <input type="text" placeholder="Высота, см" />
          <input type="text" placeholder="Ширина, см" />
        </div>
      </div>
      <div className="btn-actoins">
        <Link to="/add-product/delivery">
          <Button variant="blue ">Назад</Button>
        </Link>
        <Link to="">
          <Button variant="primary" className="primary">
            Далее
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Package;
