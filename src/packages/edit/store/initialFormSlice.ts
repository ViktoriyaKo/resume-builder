import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { ResumeItemInput } from '@/graphql/gql/graphql';

//в этом слайсе устанавливаются значения формы по умолчанию

interface TypeInitialState {
  initialFormData: ResumeItemInput;
}

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
      (state, action: PayloadAction<ResumeItemInput>) => {
        state.initialFormData = action.payload;
      }
    );
  },
});

export const getStateInitialFormData = (store: RootState) =>
  store.initialFormData;

export default Slice.reducer;
