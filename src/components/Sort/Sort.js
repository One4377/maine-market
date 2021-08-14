import "./Sort.scss";
import { useState } from "react";
import Select from "../Select/Select";
import Button from "../Button/Button";

import { ReactComponent as SearchIcon } from "./images/search.svg";
import { ReactComponent as CalendarIcon } from "./images/calendar.svg";
import { ReactComponent as TableSortIcon } from "./images/table-sort.svg";
import { ReactComponent as CartSortIcon } from "./images/cart-sort.svg";
import Raiting from "../Raiting/Raiting";

function Sort() {
  const [isToggleGroup, setIsToggleGroup] = useState(false);

  const toggleVisibleGroup = () => {
    setIsToggleGroup(!isToggleGroup);
  };

  const MARKET_OPTIONS = [
    { value: "bitmex_account", label: "Bitmex" },
    { value: "exante_account", label: "Exante" },
  ];

  return (
    <div className="Sort">
      <h2 className="title">Каталог товаров</h2>
      <div className="search">
        <input type="text" placeholder="Поиск по объявлению" />
        <SearchIcon className="search-icon" alt="Image" />
      </div>
      <div className="detail">
        <Select
          className="sort"
          isSearchable={false}
          placeholder={"Марка"}
          isClearable={false}
          //   value={selectedMarket}
          //   onChange={setSelectedMarket}
          options={MARKET_OPTIONS}
        />

        <Select
          className="sort"
          isSearchable={false}
          placeholder={"Модель"}
          isClearable={false}
          //   value={selectedMarket}
          //   onChange={setSelectedMarket}
          options={MARKET_OPTIONS}
        />

        <input className="sort" type="text" placeholder="Хешрейт" />

        <Select
          className="sort"
          isSearchable={false}
          placeholder={"Склад"}
          isClearable={false}
          //   value={selectedMarket}
          //   onChange={setSelectedMarket}
          options={MARKET_OPTIONS}
        />

        <input className="sort" type="text" placeholder="Налет" />
      </div>

      <div className="common">
        <div className="date">
          <input type="text" placeholder="Поиск по объявлению" />
          <CalendarIcon className="date-icon" alt="Image" />
        </div>

        <div className="price">
          <input type="number" placeholder="Цена от" />
          <span>-</span>
          <input type="number" placeholder="Цена до" />
        </div>

        <div className="rating">
          <Raiting />
        </div>

        <div className="btn">
          <Button variant="primary" className="accept">
            Применить
          </Button>
        </div>
      </div>

      <div className="toggleGroup">
        <div className="view">Вид</div>
        <div className="icons">
          <button className="icon-toggle" onClick={toggleVisibleGroup}>
            <TableSortIcon />
          </button>
          <button className="icon-toggle" >
            <CartSortIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sort;
