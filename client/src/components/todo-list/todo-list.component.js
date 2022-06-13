import React from "react";
import "./todo-list.styles.css";
import Todo from "../todo/todo.component";

const TodoList = () => {
  return (
    <div className="todo-list-container">
      <Todo />
    </div>
  );
};

export default TodoList;
