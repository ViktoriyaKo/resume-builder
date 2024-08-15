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
import { v4 as uuid } from 'uuid';
import {
  TypeInitialDataState,
  AddDataActionPayload,
  RemoveDataActionPayload,
  UpdateValueToDataActionPayload,
  TypeFieldData,
} from '../types';
import addItemDataToState from './utils/addItemDataToState';

//в этом слайсе обрабатываются сложные формы с вложенными секциями
const getDataItem = (data: TypeFieldData[]) => {
  return [{ uuid: uuid(), data }];
};

const initialState: TypeInitialDataState = {
  contactData: CONTACT_ENTITY,
  educationData: getDataItem(EDUCATION_ENTITY),
  courseData: getDataItem(COURSE_ENTITY),
  employmentData: getDataItem(EMPLOYMENT_ENTITY),
  linksData: getDataItem(LINKS_ENTITY),
  languagesData: getDataItem(LANGUAGES_ENTITY),
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
});

export const { addData, removeData, updateValueToData } = Slice.actions;
export const getStateData = (store: RootState) => store.data;

export default Slice.reducer;
