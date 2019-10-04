import ProductActionTypes from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: ProductActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
