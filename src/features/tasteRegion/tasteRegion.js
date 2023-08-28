import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allSelected: false,
  selectedStatus: [false, false, false, false],
};

const tasteRegionSlice = createSlice({
  name: 'tasteRegion',
  initialState,
  reducers: {
    allSelected: (state) => {
      return {
        allSelected: !state.allSelected,
        selectedStatus: state.selectedStatus.map(
          (ele, i) => !state.allSelected,
        ),
      };
    },

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

export const { allSelected, selected } = tasteRegionSlice.actions;
export default tasteRegionSlice.reducer;
