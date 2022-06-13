import React from "react";
import todoImage from "../../assets/todospage.png";
import { FaPlus } from "react-icons/fa";
import "./todo-form.styles.css";

function TodoForm() {
  return (
    <div className="main-container-todoform">
      <img src={todoImage} className="todo-image" alt="todo" />
      <div className="container-todoform">
        <input type="text" placeholder="Enter items" required />
        <FaPlus className="plus-icon" size={30} />
      </div>
    </div>
  );
}

export default TodoForm;
