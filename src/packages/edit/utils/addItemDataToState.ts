import { v4 as uuid } from 'uuid';
import { TypeExpendedData, TypeFieldData } from '../types';

const addItemDataToState = (
  state: TypeExpendedData[],
  data: TypeFieldData[]
) => {
  state.push({ uuid: uuid(), data });
};

export default addItemDataToState;
