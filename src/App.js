import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/authpage/authpage";
import Errorpage from "./pages/errorpage/errorpage";
import Homepage from "./pages/homepage/homepage";
import Notespage from "./pages/notespage/notespage";
import Pomodoro from "./components/pomodoro/pomodoro.component";
import Settings from "./components/settings/settings.component";
import Timerpage from "./pages/timerpage/timerpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<Authpage />} />
        <Route path="/notes" element={<Notespage />} />
        <Route path="/pomodoro" element={<Timerpage />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </Router>
  );
}

export default App;
