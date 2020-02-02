import { addToCart } from "./cart-utils";

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
    default:
      return state;
  }
};

export default cartReducer;
