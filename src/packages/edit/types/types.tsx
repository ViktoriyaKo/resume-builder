import { StaticImageData } from 'next/image';
import { Categories, ShortCategories } from '../constants';
import { Dispatch } from '@reduxjs/toolkit';

export interface TypeFieldData {
  caption: string;
  type?: string;
  name: string;
  value?: string;
}

export type TypeOptionsData = Omit<TypeFieldData, 'type' | 'name'>;
type UUID = string;

export type TypeExpendedData = {
  uuid: UUID;
  data: TypeFieldData[];
  values?: { [key: string]: string };
};

export interface TypeTemplate {
  link: string;
  image: StaticImageData;
  title: string;
  description: string;
}

export type TypeInitialDataState = Record<
  Exclude<Categories, Categories.CONTACT>,
  TypeExpendedData[]
> & {
  [Categories.CONTACT]: TypeFieldData[];
};

export interface AddDataActionPayload {
  category: Categories;
  data: TypeFieldData[];
}

export interface RemoveDataActionPayload {
  category: Categories;
  id?: string;
}

export interface UpdateValueToDataActionPayload {
  category: Categories;
  uuid?: UUID;
  name: string;
  value: string;
}

export interface UpdateShortFieldActionPayload {
  category: ShortCategories;
  name?: string;
  value: string;
}

export type TypeInitialShortField = Record<
  Exclude<ShortCategories, ShortCategories.TITLES>,
  string
> & {
  [ShortCategories.TITLES]: TypeFieldData[];
};

export interface TypeControllerProps {
  dispatch: Dispatch;
}

export type UpdateValueActionPayload = Omit<
  UpdateValueToDataActionPayload,
  'category'
>;
