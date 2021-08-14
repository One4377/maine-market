import "./ReadyProduct.scss";

import { Link } from "react-router-dom";
import Button from "../../Button/Button";

function ReadyProduct() {
  return (
    <div className="ReadyProduct">
      <div className="title">Товар успешно сформирован</div>
      <div className="link">
        <Link to="">
          <Button variant="primary">Добавить ещё товар</Button>
        </Link>
      </div>
    </div>
  );
}

export default ReadyProduct;
