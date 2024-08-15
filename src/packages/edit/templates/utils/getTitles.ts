import { TypeFieldData } from '../../types';

const getTitles = (data: TypeFieldData[]) => {
  const titles = data.reduce(
    (accum: { [key: string]: string }, item: TypeFieldData) => {
      const key = item.name.replace('Title', 'Data');
      return { ...accum, [key]: item.caption };
    },
    {}
  );

  return titles;
};

export default getTitles;
