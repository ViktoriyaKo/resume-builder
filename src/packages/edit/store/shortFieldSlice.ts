import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { UpdateShortFieldActionPayload, TypeInitialShortField } from '../types';
import { ShortCategories } from '../constants';
import { getCurrentResume } from '../services';

//в этом слайсе обрабатываются простые данные формы, где все values строки кроме TITLES

const initialState: TypeInitialShortField = {
  [ShortCategories.TITLES]: {},
  [ShortCategories.SKILLS_DESCRIPTION]: '',
  [ShortCategories.SUMMARY]: '',
  [ShortCategories.BACKGROUND]: '',
  [ShortCategories.COLOR]: '',
  [ShortCategories.CONTACT_ID]: 0,
};

export const Slice = createSlice({
  name: 'simpleForm',
  initialState,
  reducers: {
    updateTitleField: (
      state: TypeInitialShortField,
      action: PayloadAction<UpdateShortFieldActionPayload>
    ) => {
      const { category, name, value } = action.payload;
      if (category === ShortCategories.TITLES && name && category) {
        state[category] = { ...state[category], [name]: value };
      }
    },
    updateAdditionalField: (
      state: TypeInitialShortField,
      action: PayloadAction<UpdateShortFieldActionPayload>
    ) => {
      const { category, value } = action.payload;
      if (category !== ShortCategories.TITLES && category) {
        state[category] = value as never;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getCurrentResume.fulfilled,
      (state: TypeInitialShortField, action) => {
        Object.keys(initialState).forEach((key) => {
          const initialData = action.payload[key];
          const category = key as keyof TypeInitialShortField;
          if (category === ShortCategories.CONTACT_ID) {
            state[category] = action.payload[category.slice(0, -2)].id;
          } else {
            if (action.payload[key]) {
              state[category] = initialData;
            }
          }
        });
      }
    );
  },
});

export const { updateTitleField, updateAdditionalField } = Slice.actions;
export const getStateShortData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
