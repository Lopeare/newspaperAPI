import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';

const getTitles = createAsyncThunk(
  // action type
  'api/getTitles',
  // callback function
  async ({ terms, page = 1 }, thunkAPI) => {
    try {
      const res = await api(terms, page);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue('OOPS! Something went wrong. Maybe no more page to read.');
    }
  },
);
export default getTitles;
