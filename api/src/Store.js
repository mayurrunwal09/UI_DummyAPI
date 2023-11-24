import { configureStore } from "@reduxjs/toolkit";


import ProductsSlice from "./reducers/ProductsSlice";

export const Store = configureStore({
  reducer: {
    products: ProductsSlice,
  },
});
