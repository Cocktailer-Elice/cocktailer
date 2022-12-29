import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { POST_COCKTAIL } from '../constants/api';
import { CocktailApplyData } from '../../../types';

export const cockcipeApply = createAsyncThunk(
  'cockcipe/apply',
  async (newData: CocktailApplyData) => {
    const response = await axios.post(POST_COCKTAIL, newData);
    return response.data;
  },
);
