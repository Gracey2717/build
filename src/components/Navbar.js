import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <h2 className="logo">PJ & Crew</h2>

        {/* Hamburger / Close */}
        <button className="hamburger" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Links */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
