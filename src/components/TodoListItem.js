import React from "react";

const TodoListItem = ({ todo, i, DELETE_TASK, TOGGLE_TASK }) => {
  const handleClick = (todoId) => {
    DELETE_TASK(todoId);
  };
  const handleToggle = (todoId) => {
    TOGGLE_TASK(todoId);
  };
  return (
    <>
      <li className="list-group-item d-flex list">
        <p
          className={todo.complete ? "completed" : null}
          style={{ cursor: "pointer" }}
          onClick={() => handleToggle(todo.id)}
        >
          {i}. {todo.title}
        </p>
        <button className="btn btn-danger" onClick={() => handleClick(todo.id)}>
          Borrar
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
