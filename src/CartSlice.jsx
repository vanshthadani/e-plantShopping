import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (product) => product.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
