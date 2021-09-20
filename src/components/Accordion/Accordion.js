import { useState } from "react";
import cx from "classnames";

import "./Accordion.scss";

import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import { ReactComponent as DetailIcon } from "./images/detail.svg";
import { ReactComponent as SaveIcon } from "./images/save.svg";
import { ReactComponent as DeliveredIcon } from "./images/delivered.svg";
import { ReactComponent as ExecuteIcon } from "./images/executed.svg";
import { ReactComponent as CancelleIcon } from "./images/cancelled.svg";
import { ReactComponent as LocationIcon } from "./images/location.svg";

function Accordion({
  title,
  date,
  detail,
  save,
  delivered,
  executed,
  cancelled,
  location,
  amount,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Accordion">
      <div className="header">
        <div
          className={cx("title-wrapp", {
            "title-wrapp__open": isOpen,
          })}
          onClick={toggleAccordion}
        >
          <ArrowIcon className="icon" />
          <div className="order">{title}</div>
          <div className="date">{date}</div>
        </div>

        <div className="wrapp">
          <div className="item">
            <DetailIcon className="icon-item" /> {detail}
          </div>
          <div className="item">
            <SaveIcon className="icon-item" /> {save}
          </div>
        </div>
      </div>
      {delivered && (
        <div className="status">
          <DeliveredIcon />
          <div className="state">Доставлен</div>
        </div>
      )}
      {executed && (
        <div className="status">
          <ExecuteIcon />
          <div className="state">Выпоняется</div>
        </div>
      )}
      {cancelled && (
        <div className="status">
          <CancelleIcon />
          <div className="state">Отменен</div>
        </div>
      )}

      <div
        className={cx("content", {
          "content-open": isOpen,
        })}
      >
        {children}
      </div>

      <div className="footer">
        <div className="footer-wrapp">
          <LocationIcon />
          <div className="location">{location}</div>
        </div>
        <div className="footer-wrapp">
          <div className="total">Итого:</div>
          <div className="amount">{amount}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
