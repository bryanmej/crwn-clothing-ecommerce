import { createSelector } from "reselect";

const directorySelector = state => state.menu;

export const menuSelector = createSelector([directorySelector], menu => menu);
