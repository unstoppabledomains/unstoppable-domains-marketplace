import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface AddressConfig {
    address: string;
  }

export interface AddressState {
    config: AddressConfig;
}

const initialState: AddressConfig = {address:""};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action) => {
        state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export const getAddress = (state: RootState) => {
    // debugger
    return (state).address.address;
};

export default addressSlice.reducer;
