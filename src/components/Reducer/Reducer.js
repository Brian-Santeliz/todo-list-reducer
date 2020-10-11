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
    case Actions.DELETE_TASK:
      return state.filter((todo) => todo.id !== action.payload);
    case Actions.TOGGLE_TASK:
      return state.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, complete: !todo.complete }
          : todo;
      });

    default:
      return state;
  }
};
export default Reducer;
