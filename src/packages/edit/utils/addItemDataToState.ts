const addItemDataToState = (state, data) => {
  const lastIdValue = state[state.length - 1]?.[0] || 0;
  const newIdValue = Number(lastIdValue) + 1;
  state.push([newIdValue, data]);
};

export default addItemDataToState;
