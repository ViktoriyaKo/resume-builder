import { configureStore } from '@reduxjs/toolkit';

import dataReducer from './dataSlice';
import formDataReducer from './formDataSlice';

const configStore = configureStore({
  reducer: {
    data: dataReducer,
    formData: formDataReducer,
  },
});

export type RootState = ReturnType<typeof configStore.getState>;

export type AppDispatch = typeof configStore.dispatch;

export default configStore;
