import { configureStore } from '@reduxjs/toolkit';
import signUp from 'features/signUp/signUp';
import tasteRegion from 'features/tasteRegion/tasteRegion';
import tasteRoom from 'features/tasteRoom/tasteRoom';
import topBar from 'features/topBar/topBar';

import storage from 'redux-persist/lib/storage';

import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import like from 'features/like/like';
import recommend from 'features/recommend/recommend';
import discovery from 'features/discovery/discovery';
import detailStay from 'features/detailStay/detailStay';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['signUp', 'like'],
  blacklist: [
    'tasteRoom',
    'tasteRegion',
    'topBar',
    'likeTab',
    'recommend',
    'discovery',
    'detailStay',
  ],
};

const reducer = combineReducers({
  topBar: topBar,
  tasteRoom: tasteRoom,
  tasteRegion: tasteRegion,
  signUp: signUp,
  like: like,
  recommend: recommend,
  discovery: discovery,
  detailStay: detailStay,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: true }),
  devTools: true,
});
