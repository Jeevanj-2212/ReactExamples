import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="container text-center">
      <h1 className="text-primary">Routing Example</h1>

      {/* Navbar with Bootstrap styling */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            MyApp
          </Link>
          <div className="navbar-nav">
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
            <Link className="nav-link" to={"/contact"}>
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Route Handling */}
      <div className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
