import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/authpage/authpage";
import Profilepage from "./pages/profilepage/profilepage";
import Errorpage from "./pages/errorpage/errorpage";
import Homepage from "./pages/homepage/homepage";
import Notespage from "./pages/notespage/notespage";
import Timerpage from "./pages/timerpage/timerpage";

function App() {
  return (
    // <ProfileCard />
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/pomodoro" element={<Timerpage />} />
        <Route path="/notes" element={<Notespage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
