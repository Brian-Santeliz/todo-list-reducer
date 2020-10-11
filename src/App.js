import React, { useReducer } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import reducer from "./components/Reducer/Reducer";
import { Actions } from "./components/Reducer/Actions";
import "./App.css";

const initialState = {
  todos: [],
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState.todos);
  console.log(state);
  //por hacer,
  /* 
    por hacer:
    Crear el reducer,
    crear el compoments list
    crear los items
    creat crear el compoments navbar y que mueste las tareas por hacer
    crear los metodos para los dispatch
    crear el initiState 
    probbar
  */

  const ADD_TASK = (title) => {
    dispatch({
      type: Actions.ADD_TASK,
      payload: title,
    });
  };
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
        <h3 className="text-white mt-2">Todo's App</h3>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="container mt-5 ">
              <TodoList state={state} />
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
