const getInitialDataItem = (data: any, ENTITY: any): any[] => {
  return data.map((item: any) => {
    const { id, ...rest } = item;
    const sanitizedDescription =
      rest?.description && typeof rest.description === 'string'
        ? rest.description.replace(/^<p><br><\/p>/g, '')
        : '';
    return {
      uuid: id,
      data: ENTITY,
      values: { ...rest, description: sanitizedDescription },
    };
  });
};

export default getInitialDataItem;
