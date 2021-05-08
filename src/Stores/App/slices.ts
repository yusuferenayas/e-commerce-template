import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "Stores";
import {AppState} from "./types";

export const initialState: AppState = {
  isLoading: true,
  data: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onAppInit: (state: AppState) => {
      state.isLoading = false;
    },
  },
});

export const appIsLoading = (state: RootState) => state.app.isLoading;

export const {onAppInit} = appSlice.actions;

export default appSlice.reducer;
