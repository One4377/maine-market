import React from "react";

import "./CardProductMini.scss";

import MaineFerm from "./images/maine-ferm.png";

import { ReactComponent as CaseIcon } from "./images/case.svg";
import { ReactComponent as SellIcon } from "./images/sell.svg";

import { Characteristic } from "../";
import Raiting from "../../Raiting/Raiting";

function CardProductMini({ title, info, buy, sell }) {
  return (
    <div className="CardProductMini">
      <div className="image">
        <img src={MaineFerm} alt="images" />
      </div>
      <div className="info">
        <div className="title">
          {title}
          <span>{info}</span>
        </div>

        <div className="icons">
          <Raiting />
        </div>
      </div>

      <hr />

      <Characteristic name={"Хешрейт"} parameter={"13 TH/s"} />
      <Characteristic name={"Склад"} parameter={"Москва-Сити"} />
      <Characteristic name={"Налет"} parameter={"1 340 ч"} />

      {buy && (
        <div className="type">
          <div className="buy">
            <CaseIcon />
          </div>
          <div className="price" style={{ color: "#14B0BA" }}>
            $610.00
            <span>Предложить свою цену</span>
          </div>
        </div>
      )}

      {sell && (
        <div className="type">
          <div className="sell">
            <SellIcon />
          </div>
          <div className="price" style={{ color: "#F19C38" }}>
            $610.00
            <span>Предложить свою цену</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardProductMini;
