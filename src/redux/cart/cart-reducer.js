import { addToCart, removeFromCart } from "./cart-utils";

const INITIAL_STATE = {
  hidden: true,
  items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };
    case "ADD_ITEM":
      return {
        ...state,
        items: addToCart(state.items, action.payload)
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: removeFromCart(state.items, action.payload)
      };
    case "CLEAR_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default cartReducer;
