import "./cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ProductCard } from "../product-card/product-card.component";
export const ShoppingCart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="shopping-cart-container">
      <h1>
        {cartItems.length === 0 ? "Currently there are no items in cart." : ""}
      </h1>
      {cartItems.map(({ id, name, imageUrl, price }: any) => {
        return (
          <div key={id} className="cart-item">
            <h1>{name}</h1>
            <img src={imageUrl} />
            <h1>{price}</h1>
          </div>
        );
      })}
    </div>
  );
};
