import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";
import categoryReducer from "./category/category.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "category"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  category: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);
