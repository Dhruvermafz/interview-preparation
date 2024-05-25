import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Visuals from "./components/Visuals";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="md:flex">
        <SideBar />
        <Visuals />
      </div>
      <Footer />
    </>
  );
}

export default App;
