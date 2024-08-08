import { createSlice } from '@reduxjs/toolkit';
import {
  contactData,
  courseData,
  educationData,
  employmentData,
  languagesData,
  linksData,
} from './initialFormDataStore';
import { Categories } from '../constants/categories';
import { RootState } from './configStore';
import addItemDataToState from '../utils/addItemDataToState';
import { v4 as uuid } from 'uuid';
import { TypeInitialDataState } from '../types';

const initialState: TypeInitialDataState = {
  contactData: contactData,
  educationData: [{ uuid: uuid(), data: educationData }],
  courseData: [{ uuid: uuid(), data: courseData }],
  employmentData: [{ uuid: uuid(), data: employmentData }],
  linksData: [{ uuid: uuid(), data: linksData }],
  languagesData: [{ uuid: uuid(), data: languagesData }],
};

export const Slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      const { category, data } = action.payload;

      if (category === Categories.CONTACT) {
        state[category] = [...contactData, ...data];
      } else {
        addItemDataToState(state[category], data);
      }
    },
    removeDataItem: (state, action) => {
      const { category, id } = action.payload;
      if (category === Categories.CONTACT) {
        state[category] = [...contactData];
      } else {
        state[category] = state[category].filter((item) => item.uuid !== id);
      }
    },
  },
});

export const { addData, removeDataItem } = Slice.actions;
export const getStateData = (store: RootState) => store.data;

export default Slice.reducer;
