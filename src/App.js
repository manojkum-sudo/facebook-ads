import logo from "./logo.svg";
import "./App.css";
import ParentComp from "./components/ParentComp";
import TermCondition from "./components/TermCondition";
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import Disclaimer from "./components/Disclaimer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ParentComp />} />
          <Route path="/term" element={<TermCondition />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
