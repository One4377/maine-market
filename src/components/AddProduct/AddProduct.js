import "./AddProduct.scss";

import { Outlet } from "react-router-dom";

function AddProduct() {
  return (
    <div className="AddProduct">
      <Outlet />
    </div>
  );
}

export default AddProduct;
