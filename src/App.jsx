import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Owner from "./pages/Owner";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/owner" element={<Owner />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
