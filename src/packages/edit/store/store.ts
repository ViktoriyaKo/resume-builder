import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './dataSlice';
import shortFormReducer from './shortFieldSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    shortForm: shortFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
