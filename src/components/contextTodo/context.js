import React, {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  useContext,
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

  const DELETE_TASK = useCallback((id) => {
    dispatch({
      type: Actions.DELETE_TASK,
      payload: id,
    });
  }, []);

  const TOGGLE_TASK = useCallback((id) => {
    dispatch({
      type: Actions.TOGGLE_TASK,
      payload: id,
    });
  }, []);
  const value = useMemo(() => {
    return {
      ADD_TASK,
      DELETE_TASK,
      TOGGLE_TASK,
      state,
    };
  }, [state, DELETE_TASK, TOGGLE_TASK, ADD_TASK]);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useCustomContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("this context must be in the scope of provider.");
  }
  return context;
};

export default Context;
