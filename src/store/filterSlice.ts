import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IFilterState {
  key: string;
  textUk: string;
  textEn: string;
}

type SetFilterValue = {
  field: keyof IFilterState;
  value: string;
};

const initialState: IFilterState = {
  key: '',
  textEn: '',
  textUk: '',
};

const filterSlice = createSlice({
  initialState,
  name: 'filter',
  reducers: {
    removeFilters: state => {
      state.key = '';
      state.textUk = '';
      state.textEn = '';
    },
    setFilter: (state, action: PayloadAction<SetFilterValue>) => {
      const { field, value } = action.payload || {};
      state[field] = value;
    },
  },
});

export const { removeFilters, setFilter } = filterSlice.actions;

export type { IFilterState };

export default filterSlice.reducer;
