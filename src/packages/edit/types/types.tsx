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
  category: Categories;
  uuid?: UUID;
}

export type TypeInitialShortField = {
  [key in Exclude<ShortCategories, ShortCategories.TITLES>]: string;
} & {
  [ShortCategories.TITLES]: TypeFieldData[];
};

export type UpdateValueActionPayload = Omit<
  UpdateValueToDataActionPayload,
  'category'
>;

export interface IDataEditorItems {
  data: TypeExpendedData[];
  options?: TypeOptionsData[];
}
