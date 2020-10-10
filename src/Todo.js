import React from "react";
// import { acciones } from "./App";
export default function Todo({ todo, cambiarStado, eliminarTodo }) {
  return (
    <div>
      <span style={{ textDecoration: todo.complete && "line-through" }}>
        {todo.title}
      </span>
      <button onClick={() => cambiarStado(todo.id)}>Toggle</button>
      <button onClick={() => eliminarTodo(todo.id)}>Eliminar</button>
      {/* <button onClick={() => dispatch({tyoe:acciones.toggle, payload: todo.id})}>Toggle</button> */}

      {/* <button
        onClick={() => {
          dispatch({ type: acciones.eliminar, payload: todo.id });
        }}
      >
        Eliminar
      </button> */}
    </div>
  );
}
