import { configureStore } from '@reduxjs/toolkit';

import filterSlice from './filterSlice';

const store = configureStore({
  reducer: {
    filter: filterSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
