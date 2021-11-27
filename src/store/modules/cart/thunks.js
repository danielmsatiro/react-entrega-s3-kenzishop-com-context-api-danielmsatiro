import {
  addToCart,
  decrementToProduct,
  incrementToProduct,
  removeToCart,
} from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(addToCart(product));
};

export const incrementToProductThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = list.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  );

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(incrementToProduct(product));
};

export const decrementToProductThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = list.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
  );

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(decrementToProduct(product));
};

export const removeToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = list.filter((item) => item.id !== product.id);

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(removeToCart(product));
};
