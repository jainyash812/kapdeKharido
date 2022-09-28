import "./category-card-container.styles.scss";
import CategoryCard from "../category-card/category-card.component";

const CategoryCardContainer = ({ categoriesData }) => {
  return (
    <div className="categories-container">
      {categoriesData.map(({ title, imageUrl, id }) => {
        return <CategoryCard key={id} title={title} imageUrl={imageUrl} />;
      })}
    </div>
  );
};

export default CategoryCardContainer;
