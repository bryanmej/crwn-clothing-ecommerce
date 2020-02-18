import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const shopDataSelector = createSelector([shopSelector], data => data);

export const selectPreviewCollection = createSelector([shopSelector], data =>
  Object.keys(data).map(item => data[item])
);

export const selectCollection = urlParam =>
  createSelector([shopSelector], collections => collections[urlParam]);
