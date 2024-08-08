import { v4 as uuid } from 'uuid';

const addItemDataToState = (state, data) => {
  state.push({uuid: uuid(), data})
};

export default addItemDataToState;
