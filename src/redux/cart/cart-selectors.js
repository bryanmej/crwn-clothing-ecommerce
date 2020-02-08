import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectHidden = createSelector([selectCart], cart => cart.hidden);

export const selectCartItems = createSelector([selectCart], cart => cart.items);

export const cartItemsCount = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
);

export const selectItemsTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce((accum, item) => accum + item.quantity * item.price, 0)
);
