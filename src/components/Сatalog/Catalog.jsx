import React from "react";

import "./Catalog.scss";

import { ProductCatalog } from "../ProductCatalog";
import { Sort } from "../Sort";
import MainLayouts from "../Layouts/Main";

function Catalog() {
  return (
    <MainLayouts>
      <div className="Catalog">
        <Sort />
        <ProductCatalog />
      </div>
    </MainLayouts>
  );
}

export default Catalog;
