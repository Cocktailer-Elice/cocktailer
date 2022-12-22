import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginReqData, UserCreateData } from '../../../types';
import { LOGIN, LOGOUT, SIGNUP } from '../constants/api';

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
