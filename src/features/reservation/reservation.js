import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selected: [false, false, false, false],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    changeSelected: (state, action) => {
      return {
        ...state,
        selected: state.selected.map((ele, i) => {
          return i === action.payload ? !state.selected[i] : false;
        }),
      };
    },
  },
});

export const { changeSelected } = reservationSlice.actions;
export default reservationSlice.reducer;
