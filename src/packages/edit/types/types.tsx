export interface TypeData {
  caption: string;
  type: string;
  name: string;
}

export type TypeExpendedData = Array<Array<number | TypeData[]>>;
