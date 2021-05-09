import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultCategory, sortOptions} from "Config";
import {RootState} from "Stores";
import {ProductState} from "./types";

export const initialState: ProductState = {
  currentPage: 1,
  category: defaultCategory,
  sort: sortOptions[0].value,
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
    setSort: (state: ProductState, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const storeCurrentPage = (state: RootState) => state.product.currentPage;
export const storeCategory = (state: RootState) => state.product.category;
export const storeSort = (state: RootState) => state.product.sort;

export const {setCurrentPage, setCategory, setSort} = productSlice.actions;

export default productSlice.reducer;
