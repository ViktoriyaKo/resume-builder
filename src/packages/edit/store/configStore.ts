import { configureStore } from '@reduxjs/toolkit';

import formReducer from './dataSlice';

const configStore = configureStore({
  reducer: {
    data: formReducer,
  },
});

export type RootState = ReturnType<typeof configStore.getState>;

export type AppDispatch = typeof configStore.dispatch;

export default configStore;
