import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "@uauth/js";
import { RootState } from "../../store";

interface AddressConfig {
	userInfo: UserInfo | undefined;
}

export interface AddressState {
	config: AddressConfig;
}

const initialState: AddressConfig = { userInfo: undefined };

export const addressSlice = createSlice({
	name: "userInfo",
	initialState,
	reducers: {
		setUserInfo: (state, action) => {
			state.userInfo = action.payload;
		},
	},
});

export const { setUserInfo } = addressSlice.actions;

export const getUserInfo = (state: RootState) => {
	// debugger
	return state.userInfo.userInfo;
};

export default addressSlice.reducer;
