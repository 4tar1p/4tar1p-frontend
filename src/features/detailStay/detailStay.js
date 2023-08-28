import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [false, false],
};

const detailStaySlice = createSlice({
  name: 'detailStay',
  initialState,
  reducers: {
    clicked: (state, action) => {
      return {
        ...state,
        status: state.status.map((ele, i) =>
          i === action.payload ? !state.status[i] : state.status[i],
        ),
      };
    },
  },
});

export const { clicked } = detailStaySlice.actions;
export default detailStaySlice.reducer;
