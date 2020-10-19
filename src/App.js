import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Nav from "./components/Nav";
import { ContextProvider } from "./components/contextTodo/context";
import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="container mt-5 ">
                <TodoList />
              </div>
            </div>
            <div className="col-md-5 ">
              <Form />
            </div>
          </div>
        </div>
      </>
    </ContextProvider>
  );
};

export default App;
