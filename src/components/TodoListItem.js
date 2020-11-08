import React, { useContext } from "react";
import Context from "../components/contextTodo/context";
import { ListGroupItem, Button } from "reactstrap";
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
      <ListGroupItem className="d-flex list">
        <p
          className={todo.complete && "completed"}
          style={{ cursor: "pointer" }}
          onClick={() => handleToggle(todo.id)}
        >
          {i + 1}. {todo.title}
        </p>
        <Button color="danger" onClick={() => handleClick(todo.id)}>
          Delete
        </Button>
      </ListGroupItem>
    </>
  );
};

export default TodoListItem;
