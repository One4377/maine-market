import React from "react";

import "./Catalog.scss";

import { ProductCatalog } from "../ProductCatalog";
import { Sort } from "../Sort";

function Catalog() {
  return (
    <div className="Catalog">
      <Sort />
      <ProductCatalog />
    </div>
  );
}

export default Catalog;
