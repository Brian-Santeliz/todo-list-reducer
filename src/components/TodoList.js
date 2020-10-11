import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ state }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {state.map((todo, i) => {
          return <TodoListItem todo={todo} key={todo.id} i={i} />;
        })}
        {/* <li className="list-group-item d-flex list">
          <p className="">tarea descripcion</p>
          <button className="btn btn-danger">Borrar</button>
        </li>
        <li className="list-group-item d-flex list">
          <p className="">tarea descripcion</p>
          <button className="btn btn-danger">Borrar</button>
        </li>
        <li className="list-group-item d-flex list">
          <p className="">tarea descripcion</p>
          <button className="btn btn-danger">Borrar</button>
        </li> */}
      </ul>
    </>
  );
};

export default TodoList;
