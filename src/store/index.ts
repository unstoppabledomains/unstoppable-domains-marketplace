import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { api } from "../api/api";
import "../features/app/app_slice";
import { appSlice } from "../features/app/app_slice";
import "../features/app/user_info_slice";
import { addressSlice } from "../features/app/user_info_slice";
const persistedConfigApp = {
	key: "app",
	storage,
};
const persistConfigUserInfo = {
	key: "userInfo",
	storage,
};

const persistedReducerApp = persistReducer(
	persistedConfigApp,
	appSlice.reducer
);
const persistedReducerUserInfo = persistReducer(
	persistConfigUserInfo,
	addressSlice.reducer
);

export const store = configureStore({
	reducer: {
		app: appSlice.reducer,
		userInfo: persistedReducerUserInfo,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(api.middleware),
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
