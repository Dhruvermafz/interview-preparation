import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormCreation from "./components/FormCreation";
import FormFill from "./components/FormFill";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<FormCreation />} />
          <Route path="/fill/:id" element={<FormFill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
