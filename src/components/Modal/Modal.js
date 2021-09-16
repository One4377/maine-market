import ReactDOM from "react-dom";
import "./Modal.scss";
import cx from "classnames";

import { ReactComponent as CloseIcon } from "./images/close.svg";

export default function Modal({ children, onClose, title, isOpen, className }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={cx("Modal", className)}>
      <div className="wrapper">
        <div className="header">
          <div className="title">{title}</div>
          <button className="close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>,
    document.body
  );
}
