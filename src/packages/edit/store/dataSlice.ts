import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { contactData, educationData, employmentData } from './store';

const initialState = {
  contactData: [contactData],
  educationData: [educationData],
  courseData: [],
  employmentData: [employmentData],
  linksData: [],
  languagesData: [],
};

export const formSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData: (state, action) => {
      const { category, data } = action.payload;
      state[category] = data;
    },
    addDataItem: (state, action) => {
      const { category, item } = action.payload;
      state[category].push(item);
    },
    removeDataItem: (state, action) => {
      const { category, id } = action.payload;
      state[category] = state[category].filter((item) => item.id !== id);
    },
  },
});

export const { setData } = formSlice.actions;

export default formSlice.reducer;
