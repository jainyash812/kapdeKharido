import "./cart.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { AiFillPlusSquare, AiFillMinusCircle } from "react-icons/ai";
import { UserContext } from "../../context/user.context";
export const ShoppingCart = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartItemTotal } =
    useContext(CartContext);

  const { userDetails } = useContext(UserContext);
  const getEmail = () => {
    if (!!userDetails) {
      return userDetails.email !== null ? userDetails.email : "Guest ";
    } else return "Guest";
  };
  return (
    <div className="shopping-cart-container">
      {cartItems.length > 0 ? (
        ""
      ) : (
        <h1>
          Hey{" "}
          <span style={{ fontStyle: "italic", color: "#ff6900" }}>
            {/* {!!userDetails && userDetails.email.split("@")[0].toUpperCase()} */}
            {getEmail()}
          </span>
          {"       "}
          currently there are no items in cart.
        </h1>
      )}
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
      {cartItems.length === 0 ? (
        ""
      ) : (
        <div className="shopping-cart-bill">{`Total : ₹ ${
          cartItemTotal * 70
        }`}</div>
      )}
    </div>
  );
};
