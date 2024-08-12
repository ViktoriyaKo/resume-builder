import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState = {
  currentPage: 1,
  totalPages: 1,
  marginTop: 0,
  heightPage: 833,
};

export const Slice = createSlice({
  name: 'paginationData',
  initialState,
  reducers: {
    changeTotalPage: (state, action) => {
      state.totalPages = action.payload;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.marginTop = (action.payload - 1) * -state.heightPage;
    },
    resetStylePage: (state) => {
      state.marginTop = 0;
    },
  },
});

export const { changeTotalPage, changeCurrentPage, resetStylePage } =
  Slice.actions;

export const getPaginationData = (store: RootState) => store.paginationData;

export default Slice.reducer;
