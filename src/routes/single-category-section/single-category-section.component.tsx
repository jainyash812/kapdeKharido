import "./single-category-section.styles.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CategoryContext } from "../../context/categories.context";
import CategorySection from "../../components/category-section/catergory-section.component";

const SingleCategorySection = () => {
  const { category } = useParams();
  const { categoriesArr } = useContext(CategoryContext);
  const products = categoriesArr[category || "hats"];
  return (
    <>
      <CategorySection
        title={category}
        products={products}
        numOfCardsToDisplay={products?.length || 0}
      />
    </>
  );
};

export default SingleCategorySection;
