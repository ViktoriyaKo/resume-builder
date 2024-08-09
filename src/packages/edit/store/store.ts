import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './dataSlice';
import simpleFormReducer from './simpleFieldSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    simpleForm: simpleFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
