import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../../types';
import {
  userLogin,
  userLogout,
  userRegister,
  userRefresh,
  userDelete,
} from './authActions';

interface LoggedInState {
  user: User | null;
  isLoggedIn: boolean;
  error?: string;
}

const initialState: LoggedInState = {
  user: null,
  isLoggedIn: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(userLogout.pending, (state, action) => {
      state.user = state.user;
      state.isLoggedIn = state.isLoggedIn;
    });
    builder.addCase(userLogout.fulfilled, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    });
    builder.addCase(userLogout.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(userRegister.pending, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    });
    builder.addCase(userRegister.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(userRefresh.pending, (state, action) => {
      state.user = state.user;
      state.isLoggedIn = state.isLoggedIn;
    });
    builder.addCase(userRefresh.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(userRefresh.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(userDelete.pending, (state, action) => {
      state.user = state.user;
      state.isLoggedIn = state.isLoggedIn;
    });
    builder.addCase(userDelete.fulfilled, (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    });
    builder.addCase(userDelete.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
