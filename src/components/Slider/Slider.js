import "swipejs/style.css";
import "./Slider.scss";

import Swipe, { SwipeItem } from "swipejs/react";
import Button from "../Button/Button";

import { ReactComponent as ArrowIcon } from "./images/arrow.svg";
import Preview1Icon from "./images/preview1.png";
import Preview2Icon from "./images/preview2.png";
import Preview3Icon from "./images/preview3.png";
import Preview4Icon from "./images/preview4.png";

const Slider = () => {
  let swipeEl;

  return (
    <div className="Slider">
      <Swipe speed={500} continuous={true} ref={(o) => (swipeEl = o)}>
        <SwipeItem>
          <img alt="1" src={Preview1Icon} />
          <Button variant="primary">Купить</Button>
        </SwipeItem>
        <SwipeItem>
          <img alt="2" src={Preview2Icon} />
          <Button variant="primary">Купить</Button>
        </SwipeItem>
        <SwipeItem>
          <img alt="3" src={Preview3Icon} />
          <Button variant="primary">Купить</Button>
        </SwipeItem>
        <SwipeItem>
          <img alt="3" src={Preview4Icon} />
          <Button variant="primary">Купить</Button>
        </SwipeItem>
      </Swipe>

      <button className="previous" onClick={() => swipeEl.prev()}>
        <ArrowIcon />
      </button>
      <button className="next" onClick={() => swipeEl.next()}>
        <ArrowIcon />
      </button>
    </div>
  );
};

export default Slider;
