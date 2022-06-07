import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authpage from "./pages/authpage/authpage";
import Errorpage from "./pages/errorpage/errorpage";
import Homepage from "./pages/homepage/homepage";
import QuoteBlock from "./components/quote/quote.component";

function App() {
  return (
    <QuoteBlock />
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/auth" element={<Authpage />} />
    //     <Route path="*" element={<Errorpage />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
