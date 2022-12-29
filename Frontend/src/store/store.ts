import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from './authSlice';
import { cockcipeSlice } from './cockcipeSlice';
import { cockgorithmSlice } from './cockgorithmSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cockcipe: cockcipeSlice.reducer,
    cockgorithm: cockgorithmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
