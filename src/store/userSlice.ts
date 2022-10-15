import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  token: string | null;
}

const initialState: IUserState = {
  token: null,
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    removeUser: state => {
      state.token = null;
    },
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.token = action.payload.token;
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
