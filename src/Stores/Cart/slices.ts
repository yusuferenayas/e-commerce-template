import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ItemModel} from "Models";
import {RootState} from "Stores";
import {CartItemType, CartState} from "./types";

export const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state: CartState, action: PayloadAction<ItemModel>) => {
      const index = state.cartItems.findIndex(
        ({slug}) => slug === action.payload.slug
      );

      if (index > -1) {
        state.cartItems[index].count += 1;
      } else {
        state.cartItems.push({...action.payload, count: 1});
      }

      return state;
    },
    setCartItem: (state: CartState, action: PayloadAction<CartItemType>) => {
      const {count} = action.payload;

      const index = state.cartItems.findIndex(
        ({slug}) => slug === action.payload.slug
      );

      if (count === 0) {
        state.cartItems.splice(index, 1);
      } else {
        state.cartItems[index].count = count;
      }

      return state;
    },
  },
});

export const storeCartItems = (state: RootState) => state.cart.cartItems;

export const {addCartItem, setCartItem} = cartSlice.actions;

export default cartSlice.reducer;
