import { TypeFieldData } from '../../types';

const convertFilledContactData = (data: TypeFieldData[]) => {
  const convertData = data.reduce(
    (accum: { [key: string]: string }, item: TypeFieldData) => {
      const key = item.name as string;
      accum[key] = item.value as string;
      return accum;
    },
    {}
  );

  return convertData;
};

export default convertFilledContactData;
