import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signuppage from "./pages/signuppage/signuppage";
import Loginpage from "./pages/loginpage/loginpage";
import Profilepage from "./pages/profilepage/profilepage";
import Errorpage from "./pages/errorpage/errorpage";
import Homepage from "./pages/homepage/homepage";
import Notespage from "./pages/notespage/notespage";
import Todospage from "./pages/todospage/todospage";
import Timerpage from "./pages/timerpage/timerpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/pomodoro" element={<Timerpage />} />
        <Route path="/notes" element={<Notespage />} />
        <Route path="/todos" element={<Todospage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
