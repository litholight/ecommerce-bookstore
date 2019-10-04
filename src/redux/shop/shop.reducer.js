import PRODUCT_DATA from "./shop.data";

import ProductActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: PRODUCT_DATA
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default productsReducer;
