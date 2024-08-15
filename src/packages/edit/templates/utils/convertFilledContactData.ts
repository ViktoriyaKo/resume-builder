import { useCallback } from "react";
import { TypeFieldData } from "../../types";

const convertFilledContactData = (data: TypeFieldData[]) => {
  const convertData = data.reduce(
    (accum: { [key: string]: string }, item: TypeFieldData) => {
      accum[item.name] = item.value as string;
      return accum;
    },
    {}
  );

  return convertData};

export default convertFilledContactData;
