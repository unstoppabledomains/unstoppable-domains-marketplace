import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { api } from "../api/api";
import '../features/app/address_slice';
import { addressSlice } from '../features/app/address_slice';
import '../features/app/app_slice';
import { appSlice } from "../features/app/app_slice";

export const store = configureStore({
  reducer: {
    'app': appSlice.reducer,
    'address':addressSlice.reducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
