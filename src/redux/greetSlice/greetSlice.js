import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreetings = createAsyncThunk(
  'greet/fetchGreetings',
  async () => {
    let greeting = null;
    try {
      const resp = await axios('http://127.0.0.1:3000/greetings/random');
      const { data } = resp;
      greeting = data.greetings;
    } catch (err) {
      return err;
    }
    return greeting;
  },
);

const initialState = {
  value: null,
  loading: false,
  error: null,
};

const greetSlice = createSlice({
  name: 'greet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(fetchGreetings.rejected, (state, { error }) => ({
      ...state,
      loading: false,
      error: error.message,
    }));
    builder.addCase(fetchGreetings.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      error: null,
      value: payload,
    }));
  },
});

export default greetSlice.reducer;
