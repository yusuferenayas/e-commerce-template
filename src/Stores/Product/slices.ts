import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "Stores";
import {ProductState} from "./types";

export const initialState: ProductState = {
  currentPage: 1,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setCurrentPage: (state: ProductState, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
});

export const storeCurrentPage = (state: RootState) => state.product.currentPage;

export const {setCurrentPage} = productSlice.actions;

export default productSlice.reducer;
