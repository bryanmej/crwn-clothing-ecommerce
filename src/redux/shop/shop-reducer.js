import SHOP_DATA from "./shopData";

const INITIAL_STATE = SHOP_DATA;

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_COLLECTIONS":
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
