import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store/store';
import { TypeInitialShortField, TypeUpdateSimpleData } from '../types';
import { ShortCategories } from '../constants';

//в этом слайсе обрабатываются простые данные формы, где все values строки кроме TITLES

const initialState: TypeInitialShortField = {
  [ShortCategories.TITLES]: {},
  [ShortCategories.SKILLS_DESCRIPTION]: '',
  [ShortCategories.SUMMARY]: '',
  [ShortCategories.BACKGROUND]: '',
  [ShortCategories.COLOR]: '',
  [ShortCategories.IMAGE]: '',
  [ShortCategories.ADDITIONAL]: '',
};

export const Slice = createSlice({
  name: 'simpleForm',
  initialState,
  reducers: {
    updateSimpleData: (
      state: TypeInitialShortField,
      action: PayloadAction<TypeUpdateSimpleData>
    ) => {
      const { category, value } = action.payload;
      if (category !== ShortCategories.TITLES) {
        state[category] = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith('/fulfilled'),
      (
        state: TypeInitialShortField,
        action: PayloadAction<TypeInitialShortField>
      ) => {
        (
          Object.keys(initialState) as Array<keyof TypeInitialShortField>
        ).forEach((key) => {
          const typedKey = key as keyof TypeInitialShortField;
          const initialData = action.payload[typedKey];

          if (typedKey === ShortCategories.TITLES) {
            state[typedKey] =
              typeof initialData === 'object' ? { ...initialData } : {};
          } else if (typedKey === ShortCategories.IMAGE) {
            if (typeof initialData === 'object' && initialData !== null) {
              state[typedKey] =
                (
                  initialData as {
                    url?: string;
                    data?: { attributes?: { url?: string } };
                  }
                ).url ??
                (initialData as { data?: { attributes?: { url?: string } } })
                  .data?.attributes?.url ??
                '';
            } else {
              state[typedKey] =
                typeof initialData === 'string' ? initialData : '';
            }
          } else {
            const sanitizedData =
              typeof initialData === 'string' && initialData
                ? initialData.replace(/<p><br><\/p>/g, '')
                : '';
            state[typedKey] = sanitizedData;
          }
        });
      }
    );
  },
});
export const { updateSimpleData } = Slice.actions;

export const getStateSimpleData = (store: RootState) => store.simpleForm;

export default Slice.reducer;
