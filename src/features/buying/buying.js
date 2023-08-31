import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  totalPrice: 0,
  totalOriginPrice: 0,
  totalCount: 0,
  sportsList: [
    {
      id: 0,
      name: '테니스',
      imgSrc: '/sports/tennis.png',
      price: 20000,
      originPrice: 22000,
      selected: false,
      cnt: 0,
      // price: '20,000',
    },
    {
      id: 1,
      name: '복싱',
      imgSrc: '/sports/boxing.png',
      price: 10000,
      originPrice: 12000,
      selected: false,
      cnt: 0,

      // price: '10,000',
    },
    {
      id: 2,
      name: '수영',
      imgSrc: '/sports/swimming.png',
      price: 15000,
      originPrice: 20000,
      selected: false,
      cnt: 0,

      // price: '15,000',
    },
    {
      id: 3,
      name: '헬스',
      imgSrc: '/sports/health.png',
      price: 20000,
      originPrice: 22000,
      selected: false,
      cnt: 0,

      // price: '20,000',
    },
    {
      id: 4,
      name: '필라테스',
      imgSrc: '/sports/pilates.png',
      price: 30000,
      originPrice: 2000,
      selected: false,
      cnt: 0,

      // price: '30,000',
    },
    // {
    //   id: 5,
    //   name: '클라이밍',
    //   imgSrc: '/sports/climbing.png',
    //   price: 30000,
    // // price: '30,000',
    // cnt : 0
    // },
  ],
};

const buyingSlice = createSlice({
  name: 'buying',
  initialState,
  reducers: {
    clickedNextStep: (state, action) => {
      return {
        ...state,
        step: action.payload,
      };
    },
    selectedSports: (state, action) => {
      return {
        ...state,
        sportsList: state.sportsList.map((ele, i) =>
          i === action.payload
            ? {
                ...state.sportsList[i],
                selected: !state.sportsList[i].selected,
              }
            : {
                ...state.sportsList[i],
              },
        ),
      };
    },
    increaseCnt: (state, action) => {
      return {
        ...state,
        sportsList: state.sportsList.map((ele, i) =>
          i === action.payload
            ? {
                ...state.sportsList[i],
                cnt: state.sportsList[i].cnt + 1,
              }
            : { ...state.sportsList[i] },
        ),
      };
    },
    decreaseCnt: (state, action) => {
      return {
        ...state,
        sportsList: state.sportsList.map((ele, i) =>
          i === action.payload
            ? {
                ...state.sportsList[i],
                cnt:
                  state.sportsList[i].cnt > 0 ? state.sportsList[i].cnt - 1 : 0,
              }
            : { ...state.sportsList[i] },
        ),
      };
    },
    initCnt: (state) => {
      return {
        ...state,
        sportsList: state.sportsList.map((ele, i) =>
          i == i
            ? {
                ...state.sportsList[i],
                cnt: 0,
              }
            : { ...state.sportsList[i], cnt: 0 },
        ),
      };
    },
    setTotalPrice: (state, action) => {
      return {
        ...state,
        totalPrice: state.totalPrice + action.payload,
      };
    },
    setTotalOriginPrice: (state, action) => {
      return {
        ...state,
        totalOriginPrice: state.totalOriginPrice + action.payload,
      };
    },
    setTotalCount: (state, action) => {
      return {
        ...state,
        totalCount: state.totalCount + action.payload,
      };
    },
  },
});

export const {
  clickedNextStep,
  selectedSports,
  increaseCnt,
  decreaseCnt,
  setTotalPrice,
  setTotalOriginPrice,
  setTotalCount,
  initCnt,
} = buyingSlice.actions;
export default buyingSlice.reducer;
