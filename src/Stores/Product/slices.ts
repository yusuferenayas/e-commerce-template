import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultCategory} from "Config";
import {RootState} from "Stores";
import {ProductState} from "./types";

export const initialState: ProductState = {
  currentPage: 1,
  category: defaultCategory,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentPage: (state: ProductState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCategory: (state: ProductState, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
  },
});

export const storeCurrentPage = (state: RootState) => state.product.currentPage;
export const storeCategory = (state: RootState) => state.product.category;

export const {setCurrentPage, setCategory} = productSlice.actions;

export default productSlice.reducer;
