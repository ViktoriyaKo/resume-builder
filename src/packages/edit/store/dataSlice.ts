import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  additionalContactData,
  contactData,
  courseData,
  educationData,
  employmentData,
  languagesData,
  linksData,
} from './store';
import { Categories } from '../constants/categories';
import { RootState } from './configStore';
import addItemDataToState from '../utils/addItemDataToState';

const initialState = {
  contactData: contactData,
  educationData: [[0, educationData]],
  courseData: [[0, courseData]],
  employmentData: [[0, employmentData]],
  linksData: [[0, linksData]],
  languagesData: [[0, languagesData]],
};

export const formSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData: (state, action) => {
      const category = action.payload;
      switch (category) {
        case Categories.CONTACT:
          state[category] = [...contactData, ...additionalContactData];
          break;
        case Categories.EDUCATION:
          addItemDataToState(state.educationData, educationData);
          break;
        case Categories.COURSE:
          addItemDataToState(state.courseData, courseData);
          break;
        case Categories.EMPLOYMENT:
          addItemDataToState(state.employmentData, employmentData);
          break;
        case Categories.LINKS:
          addItemDataToState(state.linksData, linksData);
          break;
        case Categories.LANGUAGES:
          addItemDataToState(state.languagesData, languagesData);
          break;
        default:
          break;
      }
    },
    removeDataItem: (state, action) => {
      const { category, id } = action.payload;
      if (category === Categories.CONTACT) {
        state[category] = [...contactData];
      } else {
        state[category] = state[category].filter((item) => item[0] !== id);
      }
    },
  },
});

export const { addData, removeDataItem } = formSlice.actions;
export const getStateData = (store: RootState) => store.data;

export default formSlice.reducer;
