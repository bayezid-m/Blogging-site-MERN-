import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;
