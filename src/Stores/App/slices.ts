import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CompanyModel, ItemModel, TagModel} from "Models";
import {RootState} from "Stores";
import {AppState} from "./types";

export const initialState: AppState = {
  isLoading: true,
  companies: undefined,
  items: undefined,
  tags: undefined,
  maxPageCount: 0,
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
    setTags: (state: AppState, action: PayloadAction<TagModel[]>) => {
      state.tags = action.payload;
    },
    setMaxPage: (state: AppState, action: PayloadAction<number>) => {
      state.maxPageCount = action.payload;
    },
  },
});

export const appIsLoading = (state: RootState) => state.app.isLoading;
export const storeCompanies = (state: RootState) => state.app.companies;
export const storeItems = (state: RootState) => state.app.items;
export const storeTags = (state: RootState) => state.app.tags;
export const storeMaxPageCount = (state: RootState) => state.app.maxPageCount;

export const {
  onAppInit,
  onAppReady,
  setCompanies,
  setTags,
  setItems,
  setMaxPage,
} = appSlice.actions;

export default appSlice.reducer;
