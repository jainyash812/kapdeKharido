import "./category-card.styles.scss";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}
const CategoryCard = ({ title, imageUrl }: CategoryCardProps) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryCard;
