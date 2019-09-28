import CategoryActionTypes from "./category.types";
import { addDiffCategory } from "./category.utils";

const INITIAL_STATE = {
  category: []
};

const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryActionTypes.ADD_CATEGORY:
      return {
        ...state,
        category: [...state.category, action.payload]
      };
    default:
      return state;
  }
};

export default categoryReducer;
