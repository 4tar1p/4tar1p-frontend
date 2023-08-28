import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testResponse: {},
};

const apiTestSlice = createSlice({
  name: 'apiTest',
  initialState,
  reducers: {
    setResponse: (state, action) => {
      state.testResponse = action.payload;
    },
  },
});

export const { setResponse } = apiTestSlice.actions;
export default apiTestSlice.reducer;
