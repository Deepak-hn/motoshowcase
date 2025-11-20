import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="navbar">
    <h1>MotoShowcase</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/all">All Vehicles</Link>
    </div>
  </nav>
);

export default Navbar;

