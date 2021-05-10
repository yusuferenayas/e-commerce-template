import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {defaultCategory, sortOptions} from "Config";
import {RootState} from "Stores";
import {ProductState} from "./types";

export const initialState: ProductState = {
  currentPage: 1,
  category: defaultCategory,
  sort: sortOptions[0].value,
  selectedBrands: [],
  selectedTags: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentPage: (state: ProductState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetCurrentPage: (state: ProductState) => {
      state.currentPage = 1;
    },
    setCategory: (state: ProductState, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
    setSort: (state: ProductState, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setSelectedBrand: (state: ProductState, action: PayloadAction<string>) => {
      const index = state.selectedBrands.findIndex(
        (selectedBrand) => selectedBrand === action.payload
      );

      if (index > -1) {
        state.selectedBrands.splice(index, 1);
      } else {
        state.selectedBrands.push(action.payload);
      }

      return state;
    },
    resetSelectedBrand: (state: ProductState) => {
      state.selectedBrands = [];
    },
    setSelectedTags: (state: ProductState, action: PayloadAction<string>) => {
      const index = state.selectedTags.findIndex(
        (tag) => tag === action.payload
      );

      if (index > -1) {
        state.selectedTags.splice(index, 1);
      } else {
        state.selectedTags.push(action.payload);
      }

      return state;
    },
    resetSelectedTags: (state: ProductState) => {
      state.selectedTags = [];
    },
  },
});

export const storeCurrentPage = (state: RootState) => state.product.currentPage;
export const storeCategory = (state: RootState) => state.product.category;
export const storeSort = (state: RootState) => state.product.sort;
export const storeSelectedBrands = (state: RootState) =>
  state.product.selectedBrands;
export const storeSelectedTags = (state: RootState) =>
  state.product.selectedTags;

export const {
  setCurrentPage,
  resetCurrentPage,
  setCategory,
  setSort,
  setSelectedBrand,
  resetSelectedBrand,
  setSelectedTags,
  resetSelectedTags,
} = productSlice.actions;

export default productSlice.reducer;
