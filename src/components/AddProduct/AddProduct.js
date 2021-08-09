import "./AddProduct.scss";

import { Step } from "./";
import { Outlet } from "react-router-dom";

function AddProduct() {
  return (
    <div className="AddProduct">
      <Step />
      <Outlet />
    </div>
  );
}

export default AddProduct;
