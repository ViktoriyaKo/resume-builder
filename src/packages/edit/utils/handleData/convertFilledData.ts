// todo add types

import { TypeFieldData } from '../../types';

interface ConvertData {
  [key: string]: string | undefined;
}

const convertFilledContactData = (data: TypeFieldData[]): ConvertData => {
  const convertData = data.reduce(
    (accum: { [key: string]: string }, item: TypeFieldData) => {
      accum[item.name] = item.value;
      return accum;
    },
    {}
  );

  return convertData;
};

export default convertFilledContactData;
