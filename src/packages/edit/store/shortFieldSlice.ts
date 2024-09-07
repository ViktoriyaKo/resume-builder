import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
      (
        state: TypeInitialShortField,
        action: PayloadAction<TypeInitialShortField>
      ) => {
        (
          Object.keys(initialState) as Array<keyof TypeInitialShortField>
        ).forEach((key) => {
          const typedKey = key as keyof TypeInitialShortField;
          const initialData = action.payload[typedKey];

          if (typedKey === ShortCategories.TITLES) {
            state[typedKey] =
              typeof initialData === 'object' ? { ...initialData } : {};
          } else {
            state[typedKey] =
              typeof initialData === 'string' ? initialData : '';
          }
        });
      }
    );
  },
});

export const getStateShortData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
