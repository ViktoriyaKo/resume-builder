import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { titles } from './initialFormDataStore';
import { FormData } from '../constants';

const initialState = {
  titles: titles,
  [FormData.SKILLS_DESCRIPTION]: '',
  [FormData.SUMMARY]: '',
  background: 'white',
};

export const Slice = createSlice({
  name: 'simpleForm',
  initialState,
  reducers: {
    updateSimpleField: (state, action) => {
      const { category, value } = action.payload;
      // if (category === FormData.TITLES) {

      // }
    },
  },
});

export const { updateSimpleField } = Slice.actions;
export const getStateData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
