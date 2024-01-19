import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breadcrumps from "./components/Breadcrumps";
import Home from "./pages/home";
import ProductDetail from "./pages/product-detail";
import ProductListing from "./pages/product-listing";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Interview Preparation</h1>
        <Breadcrumps />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
