import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: [false, false, false, false, true, true, true, true, true],
  tabIdx: 0,
};

const likeSlice = createSlice({
  name: 'like',
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
    tabSelected: (state, action) => {
      return { ...state, tabIdx: action.payload };
    },
  },
});

export const { clicked, tabSelected } = likeSlice.actions;
export default likeSlice.reducer;
