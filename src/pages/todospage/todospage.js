import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import TodoForm from "../../components/todo-form/todo-form.component";
import Todo from "../../components/todo/todo.component";
import "./todospage.css";

function Todospage() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });
  return (
    <div>
      <Navbar />
      <div className="container-todos">
        <div className="todos-title">What's on the tasklist today?</div>
        <TodoForm />
        <Todo />
      </div>
    </div>
  );
}

export default Todospage;
