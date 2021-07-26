import "./Wallet.scss";

import { PaymentMethod } from "../PaymentMethod";
import Button from "../Button/Button";

function Wallet() {
  return (
    <div className="Wallet">
      <div className="title">Кошелек</div>
      <div className="description">Пополнение кошелька</div>
      <div className="total">₽</div>
      <div className="content">
        <div className="payment">Выберите способ пополнения</div>
        <PaymentMethod cart pay="Банковская карта (Visa/MC)" />
        <PaymentMethod bankTransfer pay="Банковский перевод" />
        <PaymentMethod qiwi pay="QIWI Кошелёк" />
        <PaymentMethod paypal pay="Paypal" />
        <PaymentMethod applePay pay="Apple Pay " />
        <PaymentMethod googlePay pay="Google Pay" />
        <div className="btn-actoins">
          <Button variant="primary" className="primary">
            Продолжить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
