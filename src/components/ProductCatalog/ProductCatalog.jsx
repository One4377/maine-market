import React from "react";

import "./ProductCatalog.scss";

import { Demand, Offer } from "./index"



function ProductCatalog() {
  return (
    <div className="ProductCatalog">
      <Offer />
      <Demand />
    </div>
  );
}

export default ProductCatalog;
