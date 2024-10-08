import { configureStore } from '@reduxjs/toolkit';

import dataReducer from '@/packages/edit/store/dataSlice';
import initialFormDataReducer from '@/packages/edit/store/initialFormSlice';
import simpleFormReducer from '@/packages/edit/store/simpleFieldSlice';
import documentPreviewPaginationReducer from '@/packages/edit/store/documentPreviewPaginationSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    simpleForm: simpleFormReducer,
    initialFormData: initialFormDataReducer,
    documentPreviewPagination: documentPreviewPaginationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
