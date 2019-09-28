import CategoryActionTypes from "./category.types";

export const addCategory = category => ({
  type: CategoryActionTypes.ADD_CATEGORY,
  payload: category
});
