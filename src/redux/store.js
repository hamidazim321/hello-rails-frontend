import { configureStore } from '@reduxjs/toolkit';
import greetSlice from './greetSlice/greetSlice';

const store = configureStore({
  reducer: {
    greet: greetSlice,
  },
});

export default store;
