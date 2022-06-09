import React from "react";
import Navbar from "../../components/navbar/navbar.component";
import NoteForm from "../../components/note-form/note-form.component";
import NoteList from "../../components/note-list/note-list.component";
import "./notespage.css";

const Notespage = () => {
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
