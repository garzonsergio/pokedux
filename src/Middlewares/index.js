export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
  const featured = [{ name: "Agumon" }, ...actionInfo.action.payload];
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  };
  next(updatedActionInfo);
};

export const sortAlphabetic = (store) => (next) => (actionSort) => {
  const orderedList = actionSort.action.payload
    .map((pokemon) => pokemon.name)
    .sort();
  const orderedPayload = actionSort.action.payload.map((pokemon, index) => ({
    ...pokemon,
    name: orderedList[index],
  }));

  const updateOrderList = {
    ...actionSort,
    action: { ...actionSort.action, payload: orderedPayload },
  };

  next(updateOrderList);
};
