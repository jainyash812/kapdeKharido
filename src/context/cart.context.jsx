import { createContext, useState, useEffect } from "react";

export const addToCart = (cartItems, productToAdd) => {
  const findCartItem = cartItems.find((cardItem) => {
    return cardItem.id === productToAdd.id;
  });

  if (findCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const removeFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: (item) => {},
  removeItemFromCart: (item) => {},
  cartItemCount: 0,
  cartItemTotal: 0,
});

export const CartItemsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItemTotal, setCartItemTotal] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addToCart(cartItems, product));
  };

  const removeItemFromCart = (product) => {
    setCartItems(removeFromCart(cartItems, product));
  };
  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartItemCount(count);
  }, [cartItems]);

  useEffect(() => {
    const count = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartItemTotal(count);
  }, [cartItems]);

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartItemCount,
    cartItemTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
