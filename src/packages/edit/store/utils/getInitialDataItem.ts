const getInitialDataItem = (data: any, ENTITY: any): any[] => {
  return data.map((item: any) => {
    const { id, ...rest } = item;
    return { uuid: id, data: ENTITY, values: rest };
  });
};

export default getInitialDataItem;
