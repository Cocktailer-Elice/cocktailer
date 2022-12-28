import { createSlice } from '@reduxjs/toolkit';
import { number } from 'yup';
import { cockcipeApply } from './cockcipeActions';

interface Init {
  dataId: number;
  error?: string;
}

const initialState: Init = {
  dataId: 0,
  error: '',
};

export const cockcipeSlice = createSlice({
  name: 'cockcipe',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(cockcipeApply.pending, (state, action) => {
      state.dataId = 0;
    });
    builder.addCase(cockcipeApply.fulfilled, (state, action) => {
      state.dataId = action.payload.data;
    });
    builder.addCase(cockcipeApply.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});
