import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import NoteForm from "../../components/note-form/note-form.component";
import NoteList from "../../components/note-list/note-list.component";
import "./notespage.css";

const Notespage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return (
    <div>
      <Navbar />
      <div className="main-notespage-container">
        <NoteForm />
        <NoteList />
      </div>
    </div>
  );
};

export default Notespage;
