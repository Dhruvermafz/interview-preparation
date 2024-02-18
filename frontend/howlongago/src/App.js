import logo from "./logo.svg";
import "./App.css";
import "react-bootstrap";
import HowTimeAgo from "./components/HowTimeAgo";
import Header from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HowTimeAgo />
    </div>
  );
}

export default App;
