import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { ResumeItem } from '@/graphql/gql/graphql';
import { TypeInitialState } from '../types';
import { getCurrentResume } from '../services';

//в этом слайсе устанавливаются значения формы по умолчанию

const initialState: TypeInitialState = {
  initialFormData: {},
  loading: true,
};

export const Slice = createSlice({
  name: 'initialFormData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentResume.pending, (state) => {
        state.loading = true;
      })
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state, action: PayloadAction<ResumeItem>) => {
          state.initialFormData = action.payload;
          state.loading = false;
        }
      );
  },
});

export const getStateInitialFormData = (store: RootState) =>
  store.initialFormData;

export default Slice.reducer;
