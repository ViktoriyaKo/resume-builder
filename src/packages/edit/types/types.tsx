import { StaticImageData } from 'next/image';
import { Categories, ShortCategories } from '../constants';
import {
  Maybe,
  ResumeItem,
  UploadFileEntityResponse,
} from '@/graphql/gql/graphql';

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

// simpleForm
export type TypeInitialShortField = {
  [ShortCategories.TITLES]: { [key: string]: string | undefined };
  [ShortCategories.SKILLS_DESCRIPTION]: string;
  [ShortCategories.SUMMARY]: string;
  [ShortCategories.BACKGROUND]: string;
  [ShortCategories.COLOR]: string;
  [ShortCategories.IMAGE]: string;
  [ShortCategories.ADDITIONAL]: string;
};

export type TypeUpdateSimpleData = {
  category: ShortCategories;
  value: string;
};

//initialFormSlice:
interface ResumeItemExtend extends Omit<ResumeItem, 'image'> {
  id?: string;
  image?: Maybe<UploadFileEntityResponse> | { url: string };
}

export interface TypeInitialState {
  initialFormData: ResumeItemExtend;
  loading?: boolean;
}
