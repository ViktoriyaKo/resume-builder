import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { TITLES } from '../entities';
import { UpdateShortFieldActionPayload, TypeInitialShortField } from '../types';
import { ShortCategories } from '../constants';

//в этом слайсе обрабатываются простые данные формы, где все values строки кроме TITLES

const initialState: TypeInitialShortField = {
  [ShortCategories.TITLES]: TITLES,
  [ShortCategories.SKILLS_DESCRIPTION]: '',
  [ShortCategories.SUMMARY]: '',
  [ShortCategories.BACKGROUND]: '',
  [ShortCategories.COLOR]: '',
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
        const findItem = state[category].find((item) => item.name === name);
        if (findItem) {
          findItem.caption = value as string;
        }
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
});

export const { updateTitleField, updateAdditionalField } = Slice.actions;
export const getStateShortData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
