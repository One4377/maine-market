import "./Home.scss";
import { Slider } from "../Slider";
import { Bonus } from "../Bonus";

function Home() {
  return (
    <div className="Home">
      <div className="Sliders">
        <Slider />
        <Bonus />
      </div>
    </div>
  );
}

export default Home;
