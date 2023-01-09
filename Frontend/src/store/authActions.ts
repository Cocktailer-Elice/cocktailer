import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginReqData, UserCreateData } from '../../../types';
import {
  LOGIN,
  LOGOUT,
  SIGNUP,
  VERIFY_LOGIN,
  WITHDRAWAL,
} from '../constants/api';

export const userLogin = createAsyncThunk(
  'user/login',
  async (data: LoginReqData) => {
    const response = await axios.post(LOGIN, data);
    return response.data;
  },
);

export const userLogout = createAsyncThunk('user/logout', async () => {
  const response = await axios.post(LOGOUT);
  return response.data;
});

export const userRegister = createAsyncThunk(
  'user/signup',
  async (data: UserCreateData) => {
    const response = await axios.post(SIGNUP, data);
    return response.data;
  },
);

export const userRefresh = createAsyncThunk('user/refresh', async () => {
  const response = await axios.get(VERIFY_LOGIN);
  if (response.status === 200) {
    return response.data;
  } else {
    return Promise.reject(new Error('Refresh failed'));
  }
});

export const userDelete = createAsyncThunk('user/delete', async () => {
  const response = await axios.delete(WITHDRAWAL);
  return response.data;
});
