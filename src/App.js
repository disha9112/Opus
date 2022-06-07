import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/authpage/authpage";
import Errorpage from "./pages/errorpage/errorpage";
import Homepage from "./pages/homepage/homepage";
import QuoteBlock from "./components/quote/quote.component";
import Note from "./components/note/note.component";
import NoteList from "./components/note-list/note-list.component";
import NoteForm from "./components/note-form/note-form.component";
import Notespage from "./pages/notespage/notespage";

function App() {
  return (
    // <QuoteBlock />
    // <Note />
    // <NoteList />
    // <NoteForm />
    // <Notespage />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/notes" element={<Notespage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
