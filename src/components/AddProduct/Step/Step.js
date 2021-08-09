import "./Step.scss";

function Step() {
  return (
    <div className="Step">
      <div className="dot">
        <div className="circle active"></div>
        <div className="line active"></div>
      </div>
      <div className="dot">
        <div className="circle active"></div>
        <div className="line active"></div>
      </div>
      <div className="dot">
        <div className="circle active"></div>
        <div className="line active"></div>
      </div>
      <div className="dot">
        <div className="circle page"></div>
        <div className="line"></div>
      </div>
      <div className="dot">
        <div className="circle"></div>
        <div className="line"></div>
      </div>
      <div className="dot">
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Step;
