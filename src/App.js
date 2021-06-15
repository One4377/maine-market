import { Catalog } from "./components/Сatalog";
import { CardProductFull } from "./components/CardProduct";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/catalog" component={Catalog} />
      <Route exact path="/card-product" component={CardProductFull} />
    </div>
  );
}

export default App;
