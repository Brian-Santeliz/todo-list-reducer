import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { Actions } from "../Reducer/Actions";
import reducer from "../Reducer/Reducer";
const Context = createContext();

let stado;
if (JSON.parse(localStorage.getItem("todo"))) {
  stado = JSON.parse(localStorage.getItem("todo"));
} else {
  stado = [];
}
const initialState = {
  todos: stado,
  // todos: JSON.parse(localStorage.getItem("todo")) || [],
};
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.todos);

  //Cuando el compomestatent cargue y actualice escribe En LS lo que hay en el state
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  const ADD_TASK = useCallback((title) => {
    dispatch({
      type: Actions.ADD_TASK,
      payload: title,
    });
  }, []);

  const DELETE_TASK = (id) => {
    dispatch({
      type: Actions.DELETE_TASK,
      payload: id,
    });
  };
  const TOGGLE_TASK = (id) => {
    dispatch({
      type: Actions.TOGGLE_TASK,
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        ADD_TASK,
        DELETE_TASK,
        TOGGLE_TASK,
        state,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
