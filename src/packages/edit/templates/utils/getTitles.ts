import { TypeFieldData } from '../../types';

const getTitles = (data: TypeFieldData[], t: (key: string) => string) => {
  const titles = data.reduce(
    (accum: { [key: string]: string }, item: TypeFieldData) => {
      const key = item?.name?.replace('Title', 'Data') as string;
      const name = item?.name as string;
      return { ...accum, [key]: t(name) };
    },
    {}
  );

  return titles;
};

export default getTitles;
