import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="assets/logo.png" alt="ARAD Logo" />
        </NavLink>
      </div>

      {/* Hamburger Button */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setMenuOpen(false)}>
          Curent Member
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setMenuOpen(false)}>
          Applicant
        </NavLink>
        <NavLink to="/partnership" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setMenuOpen(false)}>
          None MLS
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setMenuOpen(false)}>
          join Now
        </NavLink>
      </nav>
    </header>
  );
}
