import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import Context from "../components/contextTodo/context";

const TodoList = () => {
  const { state } = useContext(Context);
  return (
    <>
      <ul className="list-group list-group-flush">
        {state.length > 0 ? (
          state.map((todo, i) => (
            <TodoListItem todo={todo} key={todo.id} i={i} />
          ))
        ) : (
          <p className="text-center">Todos is empty</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
