import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CategorySection from "../../components/category-section/catergory-section.component";
import { ProductCard } from "../../components/product-card/product-card.component";
import { CategoryContext } from "../../context/categories.context";
import MultipleCategorySection from "../multiple-category-section/multiple-category-section.component";
import SingleCategorySection from "../single-category-section/single-category-section.component";
import "./shop.styles.scss";

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<MultipleCategorySection />} />
        <Route path=":category" element={<SingleCategorySection />} />
      </Routes>
    </>
  );
};

export default Shop;
