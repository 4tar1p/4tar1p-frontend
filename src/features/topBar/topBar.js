import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tabValue: 0,
};

const topBarSlice = createSlice({
  name: 'topBar',
  initialState,
  reducers: {
    change: (state, action) => {
      return { ...state, tabValue: action.payload };
    },
  },
});

export const { change } = topBarSlice.actions;
export default topBarSlice.reducer;
