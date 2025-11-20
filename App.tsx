import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AllVehicles from "./pages/AllVehicles";
import Details from "./pages/Details";

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<AllVehicles />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  </Router>
);

export default App;
