import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import NoteForm from "../../components/note-form/note-form.component";
import NoteList from "../../components/note-list/note-list.component";
import "./notespage.css";

const Notespage = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  async function handleGetNotes() {
    const response = await fetch("http://localhost:8000/notes/getNotes", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await response.json();

    if (data.status === true) {
      setNotes(data.notes);
    } else {
      alert("Error retrieving notes");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      handleGetNotes();
    }
  }, []);

  const returnedNotes = notes.map((note) => {
    return note;
  });

  return (
    <div>
      <Navbar />
      <div className="main-notespage-container">
        <NoteForm stateChangerForm={handleGetNotes} />
        <NoteList stateChangerNote={handleGetNotes} notes={returnedNotes} />
      </div>
    </div>
  );
};

export default Notespage;
