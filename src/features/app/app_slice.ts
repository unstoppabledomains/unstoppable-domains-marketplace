import { createSlice } from "@reduxjs/toolkit";
import { AppConfig, posConfig } from "../../app/constants";
import { RootState } from "../../store";


export interface AppState {
  config: AppConfig;
}

const initialState: AppConfig = posConfig;

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setApp: (state, action) => {
      return action.payload;
    },
  },
});

export const { setApp } = appSlice.actions;

export const getApp = (state: RootState) => (state as any).app;

export default appSlice.reducer;
