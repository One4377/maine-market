import "./CategoryGoods.scss";

import { Link } from "react-router-dom";
import { Characteristic } from "../../CardProduct";
import { Raiting } from "../../Raiting";
import Select from "../../Select/Select";
import Button from "../../Button/Button";
import FileUpload from "../../FileUpload/FileUpload";

function CategoryGoods() {
  const TEST = [
    { value: "TEST1", label: "TEST1" },
    { value: "TEST2", label: "TEST2" },
  ];

  return (
    <div className="CategoryGoods">
      <div className="title">Добавление нового товара</div>
      <div className="main">
        <div className="column">
          <div className="description">Наименование товара</div>
          <Select
            isSearchable={false}
            placeholder={"Марка"}
            isClearable={false}
            //   value={selectedMarket}
            //   onChange={setSelectedMarket}
            options={TEST}
          />
          <Select
            isSearchable={false}
            placeholder={"Модель"}
            isClearable={false}
            //   value={selectedMarket}
            //   onChange={setSelectedMarket}
            options={TEST}
          />
          <input type="text" disabled />

          <div className="feature">
            <div className="info"> Характеристики</div>
            <Characteristic name={"Хэшрейт:"} parameter={"16 Th/s"} />
            <Characteristic name={"Алгоритм:"} parameter={"SHA-256"} />
            <Characteristic name={"Добыча:"} parameter={"14 780 ₽/мес"} />
            <Characteristic name={"Расходы:"} parameter={"3 600 ₽/мес"} />
            <Characteristic name={"Прибыль:"} parameter={"11 280 ₽/мес"} />
            <Characteristic name={"Окупаемость:"} parameter={"6 Мес"} />
            <Characteristic name={"Доходность:"} parameter={"200 %"} />
          </div>

          <hr />
        </div>
        <div className="options">
          <div className="description">Параметры товара:</div>
          <div className="star">
            <Raiting />
            <div className="condition">Внешнее соостояние*</div>
          </div>
          <div className="star">
            <Raiting />
            <div className="condition">Техничесrое состояние*</div>
          </div>
          <div className="settings">
            <input type="text" placeholder="Серийный номер" />
            <input type="text" placeholder="Налёт" />
            <input type="text" placeholder="Дата производства" />
            <div className="wrapp">
              <Select
                className="sort"
                isSearchable={false}
                placeholder={"Валюта"}
                isClearable={false}
                //   value={selectedMarket}
                //   onChange={setSelectedMarket}
                options={TEST}
              />
              <input type="text" placeholder="Цена" />
            </div>
          </div>
          <div className="description">Описание:</div>
          <div className="about">
            Мы вынуждены отталкиваться от того, что реализация намеченных
            плановых заданий предоставляет широкие возможности для существующих
            финансовых и административных условий. Некоторые особенности
            внутренней политики набирают популярность среди определенных слоев
            населения, а значит, должны быть призваны к ответу. Также как
            постоянное информационно-пропагандистское обеспечение нашей
            деятельности требует анализа анализа существующих паттернов
            поведения. С учётом сложившейся международной обстановки, внедрение
            современных методик обеспечивает актуальность первоочередных
            требований. Мы вынуждены отталкиваться от того, что.
          </div>
          <div className="description">Добавление фото</div>
          <FileUpload />
        </div>
      </div>
      <div className="btn-actoins">
        <Link to="/add-product/delivery">
          <Button variant="primary" className="primary">
            Далее
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryGoods;
