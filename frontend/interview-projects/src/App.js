import logo from "./logo.svg";
import "./App.css";
import QRCodeGenerator from "./components/qr-code-generator";
import Accordian from "./components/accordian";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      {/* <Accordian /> */}

      <QRCodeGenerator />
    </div>
  );
}

export default App;
