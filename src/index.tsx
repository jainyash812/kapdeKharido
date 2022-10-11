import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { CartItemsProvider } from "./context/cart.context";
import { CategoriesProvider } from "./context/categories.context";
import { UserProvider } from "./context/user.context";
import "./styles.scss";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartItemsProvider>
            <App />
          </CartItemsProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
