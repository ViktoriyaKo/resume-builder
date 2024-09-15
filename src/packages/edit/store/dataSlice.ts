import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CONTACT_ENTITY,
  COURSE_ENTITY,
  EDUCATION_ENTITY,
  EMPLOYMENT_ENTITY,
  LANGUAGES_ENTITY,
  LINKS_ENTITY,
} from '../entities';
import { RootState } from '../../../store/store';

import { RemoveDataActionPayload, TypeInitialDataState } from '../types';
import { getInitialDataItem } from './utils';
import { Categories } from '../constants';

const entityMapping = {
  contact: CONTACT_ENTITY,
  education: EDUCATION_ENTITY,
  course: COURSE_ENTITY,
  employment: EMPLOYMENT_ENTITY,
  links: LINKS_ENTITY,
  languages: LANGUAGES_ENTITY,
};

//в этом слайсе обрабатываются сложные формы с вложенными секциями

const initialState: TypeInitialDataState = {
  contact: [],
  education: [],
  course: [],
  employment: [],
  links: [],
  languages: [],
};

export const Slice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    removeData: (
      state: TypeInitialDataState,
      action: PayloadAction<RemoveDataActionPayload>
    ) => {
      const { category, id } = action.payload;
      if (category !== Categories.CONTACT) {
        state[category] = state[category].filter((item) => item.uuid !== id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (
        state: TypeInitialDataState,
        action: PayloadAction<TypeInitialDataState>
      ) => {
        (
          Object.keys(entityMapping) as Array<keyof typeof entityMapping>
        ).forEach((key) => {
          if (action.payload[key]) {
            const ENTITY = entityMapping[key];
            const data = action.payload[key];
            if (key === Categories.CONTACT) {
              state[key] = ENTITY.map((item) => {
                const value = String(
                  data[item.name as keyof typeof data] || ''
                );
                return { ...item, value };
              });
            } else {
              state[key] = getInitialDataItem(data, ENTITY);
            }
          }
        });
      }
    );
  },
});
export const { removeData } = Slice.actions;

export const getStateData = (store: RootState) => store.data;

export default Slice.reducer;
