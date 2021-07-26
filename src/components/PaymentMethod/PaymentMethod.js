import "./PaymentMethod.scss";

import Checkbox from "../Checkbox/Checkbox";

import { ReactComponent as BankTransferIcon } from "./images/bank-transfer.svg";
import { ReactComponent as ApplePayIcon } from "./images/apple-pay.svg";
import { ReactComponent as CartIcon } from "./images/cart.svg";
import { ReactComponent as GooglePayIcon } from "./images/google-pay.svg";
import { ReactComponent as PayPalIcon } from "./images/paypal.svg";
import { ReactComponent as QiwiIcon } from "./images/qiwi.svg";

function PaymentMethod({
  bankTransfer,
  applePay,
  cart,
  googlePay,
  paypal,
  qiwi,
  pay,
}) {
  return (
    <div className="PaymentMethod">
      <div className="check">
        <Checkbox />
      </div>
      <div className="icon">
        {cart && <CartIcon />}
        {bankTransfer && <BankTransferIcon />}
        {applePay && <ApplePayIcon />}
        {googlePay && <GooglePayIcon />}
        {paypal && <PayPalIcon />}
        {qiwi && <QiwiIcon />}
      </div>
      <div className="pay">{pay}</div>
    </div>
  );
}

export default PaymentMethod;
