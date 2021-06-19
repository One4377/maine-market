import { Route } from "react-router-dom";

import { Catalog } from "./components/Сatalog";
import { CardProductFull } from "./components/CardProduct";
import { Auth } from "./components/Auth/";

function App() {
  return (
    <div className="App">
      <Route path="/catalog" component={Catalog} />
      <Route path="/card-product" component={CardProductFull} />
      <Route path="/auth" component={Auth} />
    </div>
  );
}

export default App;
