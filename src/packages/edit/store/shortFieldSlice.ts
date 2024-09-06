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
      if (category === ShortCategories.TITLES) {
        state[category] = { ...state[category], [name]: value };
      }
    },
    updateAdditionalField: (
      state: TypeInitialShortField,
      action: PayloadAction<UpdateShortFieldActionPayload>
    ) => {
      const { category, value } = action.payload;
      if (category !== ShortCategories.TITLES) {
        state[category] = value as string;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentResume.fulfilled, (state, action) => {
      Object.keys(initialState).forEach((key) => {
        const initialData = action.payload[key];
        if (key.includes('Id')) {
          state[key] = action.payload[key.slice(0, -2)].id;
        }
        if (action.payload[key]) {
          state[key] = initialData;
        }
      });
    });
  },
});

export const { updateTitleField, updateAdditionalField } = Slice.actions;
export const getStateShortData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
