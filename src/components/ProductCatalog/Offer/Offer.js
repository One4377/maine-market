import React from "react";

import "./Offer.scss";

import { CardProductMini } from "../../CardProduct";

function Offer({ heading }) {
  return (
    <div className="Offer">
      <h4 className="title">{heading}</h4>
      <div className="content">
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
        <CardProductMini
          title={"Antminer S9j "}
          info={"Seller: AntMiner"}
          buy
        />
      </div>
      <div className="more">
        <button className="info">Смотреть ещё</button>
      </div>
    </div>
  );
}

export default Offer;
