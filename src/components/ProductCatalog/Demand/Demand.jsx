import React from "react";
import { CardProductMini } from "../../CardProduct";
import "./Demand.scss";

function Demand() {
  return (
    <div className="Demand">
      <h4 className="title">Спрос</h4>
      <div className="content">
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          sell
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          sell
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          sell
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          sell
        />
      </div>
      <div className="more">
        <button className="info">Смотреть ещё</button>
      </div>
    </div>
  );
}

export default Demand;
