import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';

//в этом слайсе устанавливаются значения формы по умолчанию

const initialState = {
  initialFormData: [],
};

export const Slice = createSlice({
  name: 'initialFormData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.initialFormData = action.payload;
      }
    );
  },
});

export const getStateInitialFormData = (store: RootState) =>
  store.initialFormData;

export default Slice.reducer;
