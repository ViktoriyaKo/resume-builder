import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { ResumeItem } from '@/graphql/gql/graphql';
import { TypeInitialState } from '../types';

//в этом слайсе устанавливаются значения формы по умолчанию

const initialState: TypeInitialState = {
  initialFormData: {},
};

export const Slice = createSlice({
  name: 'initialFormData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (state, action: PayloadAction<ResumeItem>) => {
        state.initialFormData = action.payload;
      }
    );
  },
});

export const getStateInitialFormData = (store: RootState) =>
  store.initialFormData;

export default Slice.reducer;
