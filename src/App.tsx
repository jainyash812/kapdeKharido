import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./components/navbar/navbar.component";
import Authentication from "./routes/authentication/auth.component";
import Shop from "./routes/shop/shop.component";
import { ShoppingCart } from "./components/cart/cart.component";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
