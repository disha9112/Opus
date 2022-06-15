import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import TodoForm from "../../components/todo-form/todo-form.component";
import TodoList from "../../components/todo-list/todo-list.component";
import "./todospage.css";

function Todospage() {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  async function handleGetTodos() {
    const response = await fetch("http://localhost:8000/todos/getTodos", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await response.json();

    if (data.status === true) {
      setTodos(data.todos);
    } else {
      alert("Error retrieving todos");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      handleGetTodos();
    }
  }, []);

  const returnedTodos = todos.map((todo) => {
    return todo;
  });

  return (
    <div>
      <Navbar />
      <div className="container-todos">
        <div className="todos-title">
          {localStorage.getItem("todoId")
            ? `Edit a todo`
            : `What's on the tasklist today?`}
        </div>
        <TodoForm stateChangerTodoForm={handleGetTodos} />
        <TodoList stateChangerTodoList={handleGetTodos} todos={returnedTodos} />
      </div>
    </div>
  );
}

export default Todospage;
