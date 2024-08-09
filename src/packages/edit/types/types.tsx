import { StaticImageData } from 'next/image';
import { Categories } from '../constants';

export interface TypeFieldData {
  caption: string;
  type: string;
  name: string;
  value?: string;
}

export type TypeOptionsData = Omit<TypeFieldData, 'type' | 'name'>;

export type TypeExpendedData = { uuid: string; data: TypeFieldData[] };

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
  uuid?: string;
  name: string;
  value: string;
}
