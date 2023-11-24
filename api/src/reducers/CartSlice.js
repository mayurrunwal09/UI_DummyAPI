



// CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCartAction: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((item) => item.id === product.id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== product.id);
      }
    },
  },
});

export const { addToCartAction, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
