import React, { useReducer, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Nav from "./components/Nav";
import reducer from "./components/Reducer/Reducer";
import { Actions } from "./components/Reducer/Actions";
import "./App.css";

//SEGUNDA FORMA DE Obten y escribir del LS
// let stado;
// if (JSON.parse(localStorage.getItem("todo"))) {
//   stado = JSON.parse(localStorage.getItem("todo"));
// } else {
//   stado = [];
// }
const initialState = {
  todos: JSON.parse(localStorage.getItem("todo")) || [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState.todos);

  //Cuando el compoment cargue y actualice escribe En LS lo que hay en el state
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  const ADD_TASK = (title) => {
    dispatch({
      type: Actions.ADD_TASK,
      payload: title,
    });
  };

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
    <div>
      <Nav state={state} />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="container mt-5 ">
              <TodoList
                state={state}
                DELETE_TASK={DELETE_TASK}
                TOGGLE_TASK={TOGGLE_TASK}
              />
            </div>
          </div>
          <div className="col-md-5 ">
            <Form ADD_TASK={ADD_TASK} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
