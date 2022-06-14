import React from "react";
import "./note-list.styles.css";
import Note from "../note/note.component";

const NoteList = ({ notes, stateChangerNote }) => {
  if (!notes.length) {
    return <h4 style={{ textAlign: "center" }}>Loading...</h4>;
  } else {
    return (
      <div className="note-list-container">
        {notes.map((note, i) => {
          return (
            <Note
              key={i}
              id={notes[i]._id}
              date={notes[i].date}
              title={notes[i].title}
              description={notes[i].description}
              stateChangerNote={stateChangerNote}
            />
          );
        })}
      </div>
    );
  }
};

export default NoteList;
