import React, { useState } from "react";
import todoImage from "../../assets/todospage.png";
import { FaPlus } from "react-icons/fa";
import "./todo-form.styles.css";

const TodoForm = ({ stateChangerTodoForm }) => {
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  async function handleTodoSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/todos/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        description,
      }),
    });

    const data = await response.json();

    if (data.status === true) {
      alert("Todo created successfully");
      stateChangerTodoForm();
      setDescription("");
    } else {
      alert("There was an error, kindly try again");
    }
  }

  return (
    <div className="main-container-todoform">
      <img src={todoImage} className="todo-image" alt="todo" />
      <form className="todo-form" onSubmit={handleTodoSubmit}>
        <div className="container-todoform">
          <input
            type="text"
            placeholder="Enter items"
            required
            value={description}
            onChange={handleDescriptionChange}
          />
          <button>
            <FaPlus className="plus-icon" size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
