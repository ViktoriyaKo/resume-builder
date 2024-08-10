import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { titles } from '../entities';
import { UpdateShortFieldActionPayload, TypeInitialShortField } from '../types';
import { ShortCategories } from '../constants';

//в этом слайсе обрабатываются простые данные формы, где все values строки кроме TITLES

const initialState: TypeInitialShortField = {
  [ShortCategories.TITLES]: titles,
  [ShortCategories.SKILLS_DESCRIPTION]: '',
  [ShortCategories.SUMMARY]: '',
  [ShortCategories.BACKGROUND]: 'white',
};

export const Slice = createSlice({
  name: 'shortForm',
  initialState,
  reducers: {
    updateShortField: (
      state: TypeInitialShortField,
      action: PayloadAction<UpdateShortFieldActionPayload>
    ) => {
      const { category, name, value } = action.payload;
      if (category === ShortCategories.TITLES) {
        const findItem = state[category].find((item) => item.name === name);
        if (findItem) {
          findItem.caption = value;
        }
      } else {
        state[category] = value;
      }
    },
  },
});

export const { updateShortField } = Slice.actions;
export const getStateData = (store: RootState) => store.shortForm;

export default Slice.reducer;
