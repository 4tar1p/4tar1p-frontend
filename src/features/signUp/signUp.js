import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nickname: '',
  //   countryOfResidence: 'ko',
  //   birthOrDate: '1995/12/16',
  gender: 0,
};

const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    signUp: (state, action) => {
      return {
        ...state,
        nickname: action.payload.nickname,
        gender: action.payload.gender,
      };
    },
    setNickname: (state, action) => {
      return {
        ...state,
        nickname: action.payload,
      };
    },
    selectGender: (state, action) => {
      return {
        ...state,
        gender: action.payload,
      };
    },
  },
});

export const { signUp, setNickname, selectGender } = signUpSlice.actions;
export default signUpSlice.reducer;
