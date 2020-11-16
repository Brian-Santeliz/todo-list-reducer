import React from "react";
import TodoListItem from "./TodoListItem";
import { useCustomContext } from "../components/contextTodo/context";
import { ListGroup } from "reactstrap";
const TodoList = () => {
  const { state } = useCustomContext();

  return (
    <>
      <ListGroup flush>
        {state.length > 0 ? (
          state.map((todo, i) => (
            <TodoListItem todo={todo} key={todo.id} i={i} />
          ))
        ) : (
          <p className="text-center text-capitalize">Todos is empty</p>
        )}
      </ListGroup>
    </>
  );
};

export default TodoList;
