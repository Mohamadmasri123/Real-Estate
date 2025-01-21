import { BrowserRouter as Router, Routes, Route, Navigate, } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router> 
    <div className="bg-primary text-[#404040]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
   </div>
    </Router>
  );
}
