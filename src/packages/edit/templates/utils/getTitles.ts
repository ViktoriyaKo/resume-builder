import { TypeFieldData } from '../../types';

const getTitles = (data: TypeFieldData[], t: (key: string) => string) => {
  const titles = data.reduce(
    (accum: { [key: string]: string }, item: TypeFieldData) => {
      const key = item?.name?.replace('Title', '') as string;
      return { ...accum, [key]: t(item?.caption) };
    },
    {}
  );

  return titles;
};

export default getTitles;
