import { StaticImageData } from 'next/image';
import { Categories } from '../constants';

export interface TypeFieldData {
  caption: string;
  type: string;
  name: string;
}

export interface TypeOptionsData {
  caption: string;
  value: string;
}

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
