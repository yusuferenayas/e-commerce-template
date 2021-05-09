import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CompanyModel, ItemModel} from "Models";
import {RootState} from "Stores";
import {AppState} from "./types";

export const initialState: AppState = {
  isLoading: true,
  companies: undefined,
  items: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onAppInit: (state: AppState) => state,
    onAppReady: (state: AppState) => {
      state.isLoading = false;
    },
    setCompanies: (state: AppState, action: PayloadAction<CompanyModel[]>) => {
      state.companies = action.payload;
    },
    setItems: (state: AppState, action: PayloadAction<ItemModel[]>) => {
      state.items = action.payload;
    },
  },
});

export const appIsLoading = (state: RootState) => state.app.isLoading;
export const storeItems = (state: RootState) => state.app.items;
export const storeCompanies = (state: RootState) => state.app.companies;

export const {onAppInit, onAppReady, setCompanies, setItems} = appSlice.actions;

export default appSlice.reducer;
