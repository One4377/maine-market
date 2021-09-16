import "./Home.scss";
import { Slider } from "../Slider";
import { Bonus } from "../Bonus";
import { Sort } from "../Sort";
import { ProductCatalog } from "../ProductCatalog";

function Home() {
  return (
    <div className="Home">
      <div className="Sliders">
        <Slider />
        <Bonus />
      </div>
      <Sort />
      <ProductCatalog />
    </div>
  );
}

export default Home;
