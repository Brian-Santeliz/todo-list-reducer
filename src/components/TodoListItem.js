import React from "react";

const TodoListItem = ({ todo, i }) => {
  return (
    <>
      <li className="list-group-item d-flex list">
        <p>
          {i}. {todo.title}
        </p>
        <button className="btn btn-danger">Borrar</button>
      </li>
    </>
  );
};

export default TodoListItem;
