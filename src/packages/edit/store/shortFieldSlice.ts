import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { TypeInitialShortField } from '../types';
import { ShortCategories } from '../constants';

//в этом слайсе обрабатываются простые данные формы, где все values строки кроме TITLES

const initialState: TypeInitialShortField = {
  [ShortCategories.TITLES]: {},
  [ShortCategories.SKILLS_DESCRIPTION]: '',
  [ShortCategories.SUMMARY]: '',
  [ShortCategories.BACKGROUND]: '',
  [ShortCategories.COLOR]: '',
};

export const Slice = createSlice({
  name: 'simpleForm',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (state: TypeInitialShortField, action) => {
        Object.keys(initialState).forEach((key) => {
          const initialData = action.payload[key];
          const category = key as keyof TypeInitialShortField;
          if (action.payload[key]) {
            state[category] = initialData;
          }
        });
      }
    );
  },
});

export const getStateShortData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
