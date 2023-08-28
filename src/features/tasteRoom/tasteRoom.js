import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedStatus: [false, false, false, false, false],
};

const tasteRoomSlice = createSlice({
  name: 'tasteRoom',
  initialState,
  reducers: {
    selected: (state, action) => {
      return {
        ...state,
        selectedStatus: state.selectedStatus.map((ele, i) =>
          i === action.payload
            ? !state.selectedStatus[i]
            : state.selectedStatus[i],
        ),
      };
    },
  },
});

export const { selected } = tasteRoomSlice.actions;
export default tasteRoomSlice.reducer;
