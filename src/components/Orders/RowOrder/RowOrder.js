import "./RowOrder.scss";
import Product from "../images/product.png";

function RowOrder({ name, price, currency, total }) {
  return (
    <div className="RowOrder">
      <img src={Product} alt="images" />
      <div className="name">{name}</div>
      <div className="block">
        <div className="about">Цена</div>
        <div className="amount">{price}</div>
      </div>
      <div className="block">
        <div className="about">Количество</div>
        <div className="amount">{currency}</div>
      </div>
      <div className="block">
        <div className="about">Сумма</div>
        <div className="amount">{total}</div>
      </div>
    </div>
  );
}

export default RowOrder;
