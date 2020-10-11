import { Actions } from "./Actions";
const addTaskReduce = (title) => {
  return {
    id: Date.now(),
    title,
    complete: false,
  };
};
const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.ADD_TASK:
      return [...state, addTaskReduce(action.payload)];
    default:
      return state;
  }
};
export default Reducer;
