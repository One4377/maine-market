import React from "react";

import "./Catalog.scss";

import { ProductCatalog } from "../ProductCatalog";
import { Sort } from "../Sort";
import { ProductTable } from "../ProductTable";

function Catalog() {
  return (
    <div className="Catalog">
      <Sort />
      <ProductCatalog />
      <ProductTable />
    </div>
  );
}

export default Catalog;
