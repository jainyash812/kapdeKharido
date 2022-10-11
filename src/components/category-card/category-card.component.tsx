import { useNavigate } from "react-router-dom";
import "./category-card.styles.scss";

interface CategoryCardProps {
  title: string;
  imageUrl: string;
}
const CategoryCard = ({ title, imageUrl }: CategoryCardProps) => {
  const navigate = useNavigate();
  const redirectToShopRoute = () => {
    navigate(`/shop/${title.toLowerCase()}`);
  };
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="category-body-container" onClick={redirectToShopRoute}>
        <h2>{title.toUpperCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
export default CategoryCard;
