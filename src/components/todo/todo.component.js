import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./todo.styles.css";

function Todo() {
  return (
    <div className="main-container-todo">
      <div className="container-todo">
        <div className="todo-content">Finish painting</div>
        <div className="todo-buttons">
          <FaTrash className="btn-trash" size={28} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
