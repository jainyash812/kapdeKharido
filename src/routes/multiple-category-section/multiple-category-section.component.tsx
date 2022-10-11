import { useContext } from "react";
import "./multiple-category-section.styles.scss";
import { CategoryContext } from "../../context/categories.context";
import CategorySection from "../../components/category-section/catergory-section.component";

const MultipleCategorySection = () => {
  const { categoriesArr } = useContext(CategoryContext);

  return (
    <>
      <div className="shop-product-container">
        {Object.keys(categoriesArr).map((title) => {
          const products = categoriesArr[title];
          return (
            <CategorySection
              key={`${title}*${Math.random() * 100}`}
              title={title}
              products={products}
              numOfCardsToDisplay={4}
            />
          );
        })}
      </div>
    </>
  );
};
export default MultipleCategorySection;
