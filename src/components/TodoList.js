import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ state, DELETE_TASK, TOGGLE_TASK }) => {
  return (
    <>
      <ul className="list-group list-group-flush">
        {state.length > 0 ? (
          state.map((todo, i) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              i={i}
              DELETE_TASK={DELETE_TASK}
              TOGGLE_TASK={TOGGLE_TASK}
            />
          ))
        ) : (
          <p className="text-center">Todos is empty</p>
        )}
      </ul>
    </>
  );
};

export default TodoList;
