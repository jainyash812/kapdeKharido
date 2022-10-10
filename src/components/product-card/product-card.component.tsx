import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

interface ProductCard {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export const ProductCard = ({ product }: any) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, imageUrl, price } = product;

  const addItemtoOurCart = () => {
    addItemToCart(product);
  };
  return (
    <>
      <div className="product-card">
        <img src={imageUrl} loading="lazy" />
        <div className="product-card-content">
          <span>{name}</span>
          <span>{`₹${price * 70}`}</span>
        </div>
        <Button buttonType="inverted" onClick={addItemtoOurCart}>
          Add to Cart
        </Button>
      </div>
    </>
  );
};
