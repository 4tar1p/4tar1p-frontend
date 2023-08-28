import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFirstTime: true,
  mustedStatus: [false, true, true, true, true],
};

const discoverySlice = createSlice({
  name: 'discovery',
  initialState,
  reducers: {
    setIsFirstTime: (state) => {
      return { ...state, isFirstTime: false };
    },
    setMutedStatus: (state, action) => {
      // TODO: 이벤트 핸들러 index 수정 필요
      return {
        ...state,
        mustedStatus: state.mustedStatus.map((ele, i) =>
          i === action.payload ? false : true,
        ),
      };
    },
  },
});

export const { setIsFirstTime, setMutedStatus } = discoverySlice.actions;
export default discoverySlice.reducer;
