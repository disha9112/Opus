import React from "react";
import "./note-list.styles.css";
import Note from "../note/note.component";

const NoteList = () => {
  return (
    <div className="note-list-container">
      <Note />
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NoteList;
