import { createContext, useState } from "react";
import ProductsData from "../shopData.json";
export const ProductContext = createContext({
  products: [],
});
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(ProductsData);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
