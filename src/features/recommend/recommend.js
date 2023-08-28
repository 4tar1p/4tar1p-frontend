import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryIdx: 0,
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    countrySelected: (state, action) => {
      return {
        ...state,
        countryIdx: action.payload,
      };
    },
  },
});

export const { countrySelected } = recommendSlice.actions;
export default recommendSlice.reducer;
