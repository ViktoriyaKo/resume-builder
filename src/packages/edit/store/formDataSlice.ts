import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './configStore';
import { FormData } from '../constants';

const initialState = {
  [FormData.PERSONAL_TITLE]: 'Personal Details',
  [FormData.SUMMARY_TITLE]: 'Professional Summary',
  [FormData.EMPLOYMENT_TITLE]: 'Employment History',
  [FormData.EDUCATION_TITLE]: 'Education',
  [FormData.LANGUAGES_TITLE]: 'Languages',
  [FormData.SKILLS_TITLE]: 'Skills',
  employments: {},
  educations: {},
  courses: {},
  links: {},
  languages: {},
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    updateData: (state, action) => {
      const { data, category } = action.payload;
      if (category) {
        if (category.startsWith(FormData.EDUCATION_TITLE)) {
          state.educations = { ...state.educations, ...data };
        } else if (category.startsWith(FormData.EMPLOYMENT_TITLE)) {
          state.employments = { ...state.employments, ...data };
        } else if (category.startsWith(FormData.COURSES_TITLE)) {
          state.courses = { ...state.courses, ...data };
        } else if (category.startsWith(FormData.LINK_TITLE)) {
          state.links = { ...state.links, ...data };
        } else {
          state.languages = { ...state.languages, ...data };
        }
      } else {
        return { ...state, ...data };
      }
    },
  },
});

export const { updateData } = formDataSlice.actions;
export const getFormData = (store: RootState) => store.formData;

export default formDataSlice.reducer;
