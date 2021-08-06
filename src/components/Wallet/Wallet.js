import "./Wallet.scss";
import { useState } from "react";

import { PaymentMethod } from "../PaymentMethod";
import Button from "../Button/Button";

function Wallet() {
  const [isPaymentMethod, setIsPaymentMethod] = useState(false);

  return (
    <div className="Wallet">
      <div className="title">Кошелек</div>
      <div className="description">Пополнение кошелька</div>
      <div className="total">₽</div>
      {!isPaymentMethod && (
        <div className="content">
          <div className="payment">Выберите способ пополнения</div>
          <PaymentMethod cart pay="Банковская карта (Visa/MC)" />
          <PaymentMethod bankTransfer pay="Банковский перевод" />
          <PaymentMethod qiwi pay="QIWI Кошелёк" />
          <PaymentMethod paypal pay="Paypal" />
          <PaymentMethod applePay pay="Apple Pay " />
          <PaymentMethod googlePay pay="Google Pay" />
          <div className="btn-actoins">
            <Button
              variant="primary"
              className="primary"
              onClick={setIsPaymentMethod}
            >
              Продолжить
            </Button>
          </div>
        </div>
      )}

      {isPaymentMethod && (
        <div className="container">
          <div className="replenishment">Пополнение картой</div>
          <div className="info">
            Информация о карте передаётся вами в процессинговый центр в
            зашифрованном виде по защищённому протоколу HTTPS/SSL. Авито не
            имеет доступа к вводимой информации.
          </div>
          <div className="column">
            <input
              type="text"
              placeholder="_ _ _ _ / _ _ _ _ / _ _ _ _ / _ _ _ _"
            />
            <input type="text" placeholder="Держатель карты" />
            <div className="wrapp">
              <input
                className="deadline"
                type="text"
                placeholder="Срок действия"
              />
              <input type="text" placeholder="CVV" />
            </div>
          </div>
          <div className="btn-actoins">
            <Button
              variant="primary"
              className="primary"
            >
              Пополнить
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
