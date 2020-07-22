import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopDataSelector = createSelector(
  [shopSelector],
  (shop) => shop.collections
);

export const selectPreviewCollection = createSelector(
  [shopDataSelector],
  (data) => (data ? Object.keys(data).map((item) => data[item]) : [])
);

export const selectCollection = (urlParam) =>
  createSelector([shopDataSelector], (collections) => collections[urlParam]);

export const selectCollectionFetch = createSelector(
  [shopSelector],
  (shop) => shop.isLoading
);

export const selectCollectionLoaded = createSelector(
  [shopSelector],
  (shop) => !!shop.collections
);
