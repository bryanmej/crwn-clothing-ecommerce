import { createSelector } from "reselect";

const COLLECTION_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

const shopSelector = state => state.shop;

export const shopDataSelector = createSelector([shopSelector], data => data);

export const selectCollection = urlParam =>
  createSelector([shopSelector], collections =>
    collections.find(collection => collection.id === COLLECTION_MAP[urlParam])
  );
