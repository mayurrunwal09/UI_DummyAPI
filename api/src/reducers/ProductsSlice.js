
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// });
// const themesSlice = createSlice({
//   name: "themes",
//   initialState: {
//     darkTheme: false, // You can set this to true if dark theme is the default
//   },
//   reducers: {
//     toggleTheme: (state) => {
//       state.darkTheme = !state.darkTheme;
//     },
//   },
// });
// export const { toggleTheme } = themesSlice.actions;

// const initialState = {
//   data: { products: [] },
//   status: "idle",
//   error: null,
//   cart: [],
// };

// const ProductsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     addToCartAction: (state, action) => {
//       state.cart.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
      
//       const productIdToRemove = action.payload.id;
//       state.cart = state.cart.filter((product) => product.id !== productIdToRemove);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.data = action.payload;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addToCartAction, removeFromCart } = ProductsSlice.actions;

// export default ProductsSlice.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
});
const themesSlice = createSlice({
  name: "themes",
  initialState: {
    darkTheme: false, // You can set this to true if dark theme is the default
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});
export const { toggleTheme } = themesSlice.actions;

const initialState = {
  data: { products: [] },
  status: "idle",
  error: null,
  cart: [],
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCartAction: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.cart.find((item) => item.id === productToAdd.id);

      if (existingProduct) {
        // Increment the quantity based on how many are added
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...productToAdd, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload.id;
      const existingProduct = state.cart.find((product) => product.id === productIdToRemove);

      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1; // Decrement the quantity by one
        } else {
          // If the quantity is 1, remove the product from the cart
          state.cart = state.cart.filter((product) => product.id !== productIdToRemove);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCartAction, removeFromCart } = ProductsSlice.actions;

export default ProductsSlice.reducer;

