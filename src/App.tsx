import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import { SharedContextProvider } from "./shared/ContextProvider";

function App() {
  return (
    <div className="pageWrapper">
      <Router>
        <SharedContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </SharedContextProvider>
      </Router>
    </div>
  );
}

export default App;
