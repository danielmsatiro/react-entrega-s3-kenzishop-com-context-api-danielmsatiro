import { createContext, useState } from "react";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultState);

  const cartAdd = (product) => {
    const newCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const cartIncrement = (product) => {
    const newCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const cartDecrement = (product) => {
    const newCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const cartRemove = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, cartAdd, cartIncrement, cartDecrement, cartRemove }}
    >
      {children}
    </CartContext.Provider>
  );
};
