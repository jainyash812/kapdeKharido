import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./styles.scss";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
import { BrowserRouter } from "react-router-dom";

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
