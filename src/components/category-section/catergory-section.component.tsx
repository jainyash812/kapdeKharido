import { Link } from "react-router-dom";
import Button from "../button/button.component";
import { ProductCard } from "../product-card/product-card.component";
import "./category-section.styles.scss";

const CategorySection = ({ title, products, numOfCardsToDisplay }) => {
  return (
    <div className="category-section-container">
      {numOfCardsToDisplay === 4 ? (
        <div className="category-section-header">
          <h2>{title.toUpperCase()}</h2>
          <Link to={title}>
            <span className="view-more">{`View More ${">>>"}`}</span>
          </Link>
        </div>
      ) : (
        <div className="category-section-header-center">
          <h2>{title.toUpperCase()}</h2>
        </div>
      )}
      <div
        className={
          numOfCardsToDisplay === 4
            ? "category-section-products"
            : "category-section-products-all"
        }
      >
        {!!products &&
          products.slice(0, numOfCardsToDisplay).map((productItem) => {
            return (
              <ProductCard
                product={productItem}
                key={`${productItem.id}${Math.random() * 100}`}
              />
            );
          })}
      </div>
    </div>
  );
};
export default CategorySection;
