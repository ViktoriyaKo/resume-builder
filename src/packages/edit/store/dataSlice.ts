import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  contactData,
  additionalContactData,
  courseData,
  educationData,
  employmentData,
  languagesData,
  linksData,
} from '../entities';
import { Categories } from '../constants/categories';
import { RootState } from './store';
import { v4 as uuid } from 'uuid';
import {
  TypeInitialDataState,
  AddDataActionPayload,
  RemoveDataActionPayload,
  UpdateValueToDataActionPayload,
} from '../types';
import { addItemDataToState } from '../utils';

//в этом слайсе обрабатываются сложные формы с вложенными секциями

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
    removeDataItem: (
      state: TypeInitialDataState,
      action: PayloadAction<RemoveDataActionPayload>
    ) => {
      const { category, id } = action.payload;
      if (category === Categories.CONTACT) {
        const deletedLength = additionalContactData.length;
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
        //добавлен объект values чтобы легче было отображать данные избегая reduce:
        if (element) {
          element.values = element?.values
            ? { ...element.values, [name]: value }
            : { [name]: value };
        }
      }
    },
  },
});

export const { addData, removeDataItem, updateValueToData } = Slice.actions;
export const getStateData = (store: RootState) => store.data;

export default Slice.reducer;
