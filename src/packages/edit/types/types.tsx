import { StaticImageData } from 'next/image';

export interface TypeFieldData {
  caption: string;
  type: string;
  name: string;
}

export type TypeExpendedData = { uuid: string; data: TypeFieldData[] };

export interface TypeTemplate {
  link: string;
  image: StaticImageData;
  title: string;
  description: string;
}

export interface TypeInitialDataState {
  [key: string]: TypeExpendedData[] | TypeFieldData[];
}
