import {
  CART_ADD,
  CART_DECREMENT,
  CART_INCREMENT,
  CART_REMOVE,
} from "./actionTypes";

export const addToCart = (product) => ({
  type: CART_ADD,
  product,
});

export const incrementToProduct = (product) => ({
  type: CART_INCREMENT,
  id: product.id,
});

export const decrementToProduct = (product) => ({
  type: CART_DECREMENT,
  id: product.id,
});

export const removeToCart = (product) => ({
  type: CART_REMOVE,
  id: product.id,
});
