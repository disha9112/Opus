import React, { useState, useEffect } from "react";
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

    const response = await fetch(
      "https://opus-live.herokuapp.com/todos/createTodo",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          description,
        }),
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Todo created successfully");
      stateChangerTodoForm();
      setDescription("");
    } else {
      alert("There was an error, kindly try again");
    }
  }

  async function handleTodoUpdateDetails() {
    const res = await fetch(
      "https://opus-live.herokuapp.com/todos/getTodo/" +
        localStorage.getItem("todoId"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const initialData = await res.json();

    if (initialData.status === true) {
      setDescription(initialData.description);
    } else {
      alert("There was an error, kindly try again");
    }
  }

  async function handleTodoUpdate(event) {
    event.preventDefault();

    const response = await fetch(
      "https://opus-live.herokuapp.com/todos/updateTodo/" +
        localStorage.getItem("todoId"),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          description,
        }),
      }
    );

    const data = await response.json();

    if (data.status === true) {
      alert("Todo updated successfully");
      localStorage.removeItem("todoId");
      stateChangerTodoForm();
      setDescription("");
    } else {
      alert("There was an error, kindly try again");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("todoId")) {
      handleTodoUpdateDetails();
    }
  }, []);

  if (localStorage.getItem("todoId")) {
    return (
      <div className="main-container-todoform">
        <img src={todoImage} className="todo-image" alt="todo" />
        <form className="todo-form" onSubmit={handleTodoUpdate}>
          <div className="container-todoform">
            <input
              type="text"
              placeholder="Update item"
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
  } else {
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
  }
};

export default TodoForm;
