import React, { useContext } from "react";
import Context from "../components/contextTodo/context";

const TodoListItem = ({ todo, i }) => {
  const { DELETE_TASK, TOGGLE_TASK } = useContext(Context);

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
          {i + 1}. {todo.title}
        </p>
        <button className="btn btn-danger" onClick={() => handleClick(todo.id)}>
          Borrar
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
