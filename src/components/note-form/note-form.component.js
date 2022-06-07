import React from "react";
import Button from "../../components/button/button.component";
import "./note-form.styles.css";

const NoteForm = () => {
  return (
    <div className="note-form-container">
      <h1>Jot down a note</h1>
      <input type="text" placeholder="Title" required />
      <textarea type="text" placeholder="Description" required />
      <Button authSubmit>Create</Button>
    </div>
  );
};

export default NoteForm;
