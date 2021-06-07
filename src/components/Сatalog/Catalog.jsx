import React from "react";

import "./Catalog.scss";

import { ProductCatalog } from "../ProductCatalog/index"
import { Sort } from "../Sort/index"



function Catalog() {
  return (
    <div className="Catalog">
      <Sort />
      <ProductCatalog />
    </div>
  );
}

export default Catalog;
