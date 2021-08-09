import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Catalog } from "./components/Сatalog";
import { CardProductFull } from "./components/CardProduct";
import { Auth, SignIn, SignUp } from "./components/Auth/";
import {
  Profile,
  Person,
  AboutUser,
  Passport,
  LegalPerson,
  LegalContact,
} from "./components/Profile";
import {
  AddProduct,
  CategoryGoods,
  Delivery,
  Package,
  Preview,
  Confirmation,
} from "./components/AddProduct";
import { Wallet } from "./components/Wallet";
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
            <Route path="/legal-person" element={<LegalPerson />} />
            <Route path="/legal-contact" element={<LegalContact />} />
          </Route>

          <Route path="/add-product" element={<AddProduct />}>
            <Route path="/category-goods" element={<CategoryGoods />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/package" element={<Package />} />
            <Route path="/preview" element={<Preview />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Route>

          <Route path="/wallet" element={<Wallet />} />
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
