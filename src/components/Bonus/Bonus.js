import "./Bonus.scss";
import Button from "../Button/Button";

import PreviewIcon from "./images/preview.png";

function Bonus() {
  return (
    <div className="Bonus">
      <img alt="1" src={PreviewIcon} />
      <Button variant="primary">Купить</Button>
    </div>
  );
}

export default Bonus;
