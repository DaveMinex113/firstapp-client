import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import ChatBot from "./ChatBot";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GoogleLogin />} />
        <Route path="/chat" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
