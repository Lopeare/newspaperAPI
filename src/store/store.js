import { configureStore } from '@reduxjs/toolkit';
import { apiReducer, paginationReducer } from '../slices';

const store = configureStore(
  {
    reducer: {
      api: apiReducer,
      pagination: paginationReducer,
    },
  },
);
export default store;
