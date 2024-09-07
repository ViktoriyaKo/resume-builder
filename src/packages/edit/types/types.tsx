import { StaticImageData } from 'next/image';
import { Categories, ShortCategories } from '../constants';

interface TypeAttributeData {
  name?: string;
  value?: string;
}

export interface TypeFieldData extends TypeAttributeData {
  caption: string;
  type?: string;
}

export type TypeOptionsData = Omit<TypeFieldData, 'type' | 'name'>;
type UUID = string;

export type TypeExpendedData = {
  uuid: UUID;
  data: TypeFieldData[];
  values?: { [key: string]: string | undefined };
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

export interface RemoveDataActionPayload {
  category: Categories;
  id?: string;
}

export interface AddDataActionPayload extends RemoveDataActionPayload {
  data: TypeFieldData[];
}

export interface UpdateShortFieldActionPayload extends TypeAttributeData {
  category: ShortCategories;
}

export interface UpdateValueToDataActionPayload extends TypeAttributeData {
  name: string;
  category: Categories;
  uuid?: UUID;
}

export type TypeInitialShortField = {
  [ShortCategories.TITLES]: { [key: string]: string | undefined };
  [ShortCategories.SKILLS_DESCRIPTION]: string;
  [ShortCategories.SUMMARY]: string;
  [ShortCategories.BACKGROUND]: string;
  [ShortCategories.COLOR]: string;
};

export type UpdateValueActionPayload = Omit<
  UpdateValueToDataActionPayload,
  'category'
>;

export interface IDataEditorItems {
  data: TypeExpendedData[];
  options?: TypeOptionsData[];
}

export interface IFields {
  caption: string;
  name: string;
  type?: string;
  value?: any;
}
