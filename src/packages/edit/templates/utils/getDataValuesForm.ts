import { TypeExpendedData } from '../../types';

const getDataValuesForm = (data: TypeExpendedData[]) => {
  const arrayValues = data
    .map((item) => {
      return item.values;
    })
    .filter((item) => item);

  return arrayValues;
};

export default getDataValuesForm;
