import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './dataSlice';
import formFilledDataReducer from './formFilledDataSlice';

const configStore = configureStore({
  reducer: {
    data: dataReducer,
    formFilledData: formFilledDataReducer,
  },
});

export type RootState = ReturnType<typeof configStore.getState>;

export type AppDispatch = typeof configStore.dispatch;

export default configStore;
