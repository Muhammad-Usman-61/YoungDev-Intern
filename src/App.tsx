import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Router>
      <NavBar />
    </>
  );
}

export default App;
