import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Catalog } from "./components/Сatalog";
import { CardProductFull } from "./components/CardProduct";
import { Auth, SignIn, SignUp } from "./components/Auth/";
import { Profile, Person, AboutUser, Passport } from "./components/Profile";
import MainLayout from "./components/Layouts/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <MainLayout>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/card-product" element={<CardProductFull />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="/person" element={<Person />} />
            <Route path="/about-user" element={<AboutUser />} />
            <Route path="/passport" element={<Passport />} />
          </Route>
        </MainLayout>
        <Route path="/auth" element={<Auth />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
