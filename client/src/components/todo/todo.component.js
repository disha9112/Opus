import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import "./todo.styles.css";

function Todo({ id, description, stateChangerTodoList }) {
  const [completed, setCompleted] = useState(false);

  async function isUpdateTodo() {
    localStorage.setItem("todoId", id);
    window.location.reload();
  }

  async function handleTodoDelete() {
    const response = await fetch(
      "https://opus-live.herokuapp.com/todos/deleteTodo/" + id,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Todo deleted successfully");
      stateChangerTodoList();
    } else {
      alert("Error deleting todo");
    }
  }

  const handleTodoStatus = () => {
    if (completed) {
      setCompleted(false);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="main-container-todo">
      <div className="container-todo">
        <div
          onClick={() => handleTodoStatus()}
          className={`${completed ? "striked" : ""} todo-content`}
        >
          {description}
        </div>
        <div className="todo-buttons">
          <FaTrash
            onClick={() => handleTodoDelete()}
            className="btn-trash"
            size={28}
          />
          <FaEdit
            className="btn-edit-todo"
            size={30}
            onClick={() => isUpdateTodo()}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
