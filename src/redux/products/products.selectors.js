import { createSelector } from "reselect";

const selectProducts = state => state.products;

export const selectProductData = createSelector(
  [selectProducts],
  products => products.products
);
