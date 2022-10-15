import { configureStore } from '@reduxjs/toolkit';

import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;