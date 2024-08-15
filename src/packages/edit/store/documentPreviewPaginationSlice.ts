import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';

const initialState = {
  currentPage: 1,
  totalPages: 1,
  marginTop: 0,
  heightPage: 833,
};

export const Slice = createSlice({
  name: 'documentPreviewPagination',
  initialState,
  reducers: {
    changeTotalPage: (state, action) => {
      state.totalPages = action.payload;
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      state.marginTop = (action.payload - 1) * -state.heightPage;
    },
  },
});

export const { changeTotalPage, changeCurrentPage } = Slice.actions;

export const getPreviewPaginationData = (store: RootState) =>
  store.documentPreviewPagination;

export default Slice.reducer;
