import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginReqData, UserCreateData } from '../../../types';

export const userLogin = createAsyncThunk(
  'user/login',
  async (data: LoginReqData) => {
    const response = await axios.post(
      'http://localhost:8000/api/auth/login',
      data,
    );
    return response.data;
  },
);

export const userLogout = createAsyncThunk('user/logout', async () => {
  const response = await axios.post('http://localhost:8000/api/auth/logout');
  return response.data;
});

export const userRegister = createAsyncThunk(
  'user/signup',
  async (data: UserCreateData) => {
    const response = await axios.post(
      'http://localhost:8000/api/auth/signup',
      data,
    );
    return response.data;
  },
);
