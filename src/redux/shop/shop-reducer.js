import SHOP_DATA from "./shopData";

const INITIAL_STATE = SHOP_DATA;

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};