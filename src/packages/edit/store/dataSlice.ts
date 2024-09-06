import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  CONTACT_ENTITY,
  ADDITIONAL_CONTACT_ENTITY,
  COURSE_ENTITY,
  EDUCATION_ENTITY,
  EMPLOYMENT_ENTITY,
  LANGUAGES_ENTITY,
  LINKS_ENTITY,
} from '../entities';
import { Categories } from '../constants/categories';
import { RootState } from '../../../store/store';

import {
  TypeInitialDataState,
  AddDataActionPayload,
  RemoveDataActionPayload,
  UpdateValueToDataActionPayload,
} from '../types';
import { getCurrentResume } from '../services';
import { getInitialDataItem, addItemDataToState } from './utils';

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
    addData: (
      state: TypeInitialDataState,
      action: PayloadAction<AddDataActionPayload>
    ) => {
      const { category, data } = action.payload;

      if (category === Categories.CONTACT) {
        state[category] = [...state[category], ...data];
      } else {
        addItemDataToState(state[category], data);
      }
    },
    removeData: (
      state: TypeInitialDataState,
      action: PayloadAction<RemoveDataActionPayload>
    ) => {
      const { category, id } = action.payload;
      if (category === Categories.CONTACT) {
        const deletedLength = ADDITIONAL_CONTACT_ENTITY.length;
        state[category] = state[category].slice(0, -deletedLength);
      } else {
        state[category] = state[category].filter((item) => item.uuid !== id);
      }
    },
    updateValueToData: (
      state: TypeInitialDataState,
      action: PayloadAction<UpdateValueToDataActionPayload>
    ) => {
      const { category, uuid, name, value } = action.payload;
      if (category === Categories.CONTACT) {
        const findItem = state[category].find((item) => item.name === name);
        if (findItem) {
          findItem.value = value;
        }
      } else {
        const element = state[category].find((item) => item.uuid === uuid);
        if (element) {
          element.values = element?.values
            ? { ...element.values, [name]: value }
            : { [name]: value };
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCurrentResume.fulfilled, (state, action) => {
      (Object.keys(entityMapping) as Array<keyof typeof entityMapping>).forEach(
        (key) => {
          if (action.payload[key]) {
            const ENTITY = entityMapping[key];
            const data = action.payload[key];
            if (key === 'contact') {
              state[key] = ENTITY.map((item) => {
                return { ...item, value: data[item.name] };
              });
            } else {
              state[key] = getInitialDataItem(data, ENTITY);
            }
          }
        }
      );
    });
  },
});

export const { addData, removeData, updateValueToData } = Slice.actions;
export const getStateData = (store: RootState) => store.data;

export default Slice.reducer;
