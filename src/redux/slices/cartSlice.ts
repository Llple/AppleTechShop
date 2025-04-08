import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartProducts {
  id: string;
  imageUrl: string;
  title: string;
  storage: string;
  price: number;
  count: number;
}

interface CartState {
  cartProducts: CartProducts[];
  totalPrice: number;
}

const initialState: CartState = {
  cartProducts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartProducts: (state, action: PayloadAction<CartProducts>) => {
      const existingItem = state.cartProducts.find(
        (item) =>
          item.id === action.payload.id &&
          item.storage === action.payload.storage
      );
      if (existingItem) {
        existingItem.count += action.payload.count; 
      } else {
        state.cartProducts = [...state.cartProducts,action.payload]; 
      }
      console.log(state.cartProducts)
    },
  },
});

export const { setCartProducts } = cartSlice.actions;

export default cartSlice.reducer;
