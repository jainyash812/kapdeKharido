import "./cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { AiFillPlusSquare, AiFillMinusCircle } from "react-icons/ai";
export const ShoppingCart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartItemTotal } =
    useContext(CartContext);

  console.log(cartItems, "cartItems");
  return (
    <div className="shopping-cart-container">
      <h1>
        {cartItems.length > 0 ? "" : "Currently there are no items in cart."}
      </h1>
      <div className="shopping-cart-item-container">
        {cartItems.map((cartItem: any) => {
          const { id, name, imageUrl, quantity } = cartItem;
          return (
            <div key={id} className="cart-item">
              <img src={imageUrl} className="cart-item-image" />
              <div className="cart-item-content-container">
                <h3>{name}</h3>
                <div className="cart-item-quantity-container">
                  <AiFillPlusSquare
                    className="plus-icon"
                    onClick={() => {
                      addItemToCart(cartItem);
                    }}
                  />
                  <span>{quantity}</span>
                  <AiFillMinusCircle
                    className="minus-icon"
                    onClick={() => {
                      removeItemFromCart(cartItem);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="shopping-cart-total">
        {cartItems.length === 0 ? "" : `Total : ${cartItemTotal}`}
      </h2>
    </div>
  );
};
