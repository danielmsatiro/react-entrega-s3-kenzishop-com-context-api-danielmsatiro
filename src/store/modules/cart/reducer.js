import {
  CART_ADD,
  CART_DECREMENT,
  CART_INCREMENT,
  CART_REMOVE,
} from "./actionTypes";

const defaultState = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CART_ADD:
      const { product } = action;
      return [...state, product];

    case CART_INCREMENT:
      const { id } = action;
      return state.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );

    case CART_DECREMENT:
      const { id: decrementId } = action;

      return state.map((item) =>
        item.id === decrementId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case CART_REMOVE:
      const { id: removeId } = action;

      return state.filter((item) => item.id !== removeId);

    default:
      return state;
  }
};

export default cartReducer;
