import React from "react";
import "./todo-list.styles.css";
import Todo from "../todo/todo.component";

const TodoList = ({ todos, stateChangerTodoList }) => {
  if (!todos.length) {
    return <h4 style={{ textAlign: "center" }}>Loading...</h4>;
  } else {
    return (
      <div className="todo-list-container">
        {todos.map((todo, i) => {
          return (
            <Todo
              key={i}
              id={todos[i]._id}
              description={todos[i].description}
              stateChangerTodoList={stateChangerTodoList}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="todo-list-container">
      <Todo />
    </div>
  );
};

export default TodoList;
