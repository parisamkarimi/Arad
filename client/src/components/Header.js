// src/components/Header.js
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);          // mobile nav
  const [openMenu, setOpenMenu] = useState(null);           // 'applicants' | 'nonmls' | null
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // close dropdowns when clicking outside or pressing ESC
  useEffect(() => {
    const onClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const go = (path) => {
    setMenuOpen(false);
    setOpenMenu(null);
    navigate(path);
  };

  return (
    <header className="header" ref={containerRef}>
      <div className="logo">
        <NavLink to="/"><img src="/assets/logo.png" alt="ARAD Logo" /></NavLink>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label="Menu">☰</button>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>

        {/* CURRENT MEMBERS dropdown */}
<div
  className={`nav-item dropdown ${openMenu === "members" ? "open" : ""}`}
  onMouseEnter={() => setOpenMenu("members")}
  onMouseLeave={() => setOpenMenu(null)}
>
  <button
    className="nav-link dropdown-toggle"
    onClick={() => setOpenMenu(openMenu === "members" ? null : "members")}
    aria-expanded={openMenu === "members"}
  >
    Current Members ▾
  </button>

  <div className="dropdown-menu">
    <button className="dropdown-item" onClick={() => go("/members/referral")}>Referral</button>
    <button className="dropdown-item" onClick={() => go("/members/license-status")}>License Status</button>
    <button className="dropdown-item" onClick={() => go("/members/nv-business-license")}>Nevada Business License</button>
    <button className="dropdown-item" onClick={() => go("/members/transfer-out")}>Transfer Out</button>
    <button className="dropdown-item" onClick={() => go("/members/request-form")}>Request Form</button>
    <button className="dropdown-item" onClick={() => go("/members/videos")}>Video</button>
  </div>
</div>


        {/* Applicants dropdown */}
        <div
          className={`nav-item dropdown ${openMenu === "applicants" ? "open" : ""}`}
          onMouseEnter={() => setOpenMenu("applicants")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button
            className="nav-link dropdown-toggle"
            onClick={() => setOpenMenu(openMenu === "applicants" ? null : "applicants")}
            aria-expanded={openMenu === "applicants"}
          >
            Applicants ▾
          </button>

          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => go("/applicants/activate")}>How to Activate Your License</button>
            <button className="dropdown-item" onClick={() => go("/applicants/transfer")}>How to Transfer Your License</button>
            <button className="dropdown-item" onClick={() => go("/applicants/non-mls")}>Practicing Real Estate Without the MLS</button>
          </div>
        </div>

        {/* Non MLS Real Estate dropdown */}
        <div
          className={`nav-item dropdown ${openMenu === "nonmls" ? "open" : ""}`}
          onMouseEnter={() => setOpenMenu("nonmls")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button
            className="nav-link dropdown-toggle"
            onClick={() => setOpenMenu(openMenu === "nonmls" ? null : "nonmls")}
            aria-expanded={openMenu === "nonmls"}
          >
            Non MLS Real Estate ▾
          </button>

          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={() => go("/join")}>Join Now</button>
            <button className="dropdown-item" onClick={() => go("/non-mls/practicing")}>Practicing Real Estate</button>
            <button className="dropdown-item" onClick={() => go("/non-mls/roi")}>Improve Licensing ROI</button>
            <button className="dropdown-item" onClick={() => go("/non-mls/free-broker")}>MLS Free Broker</button>
            <button className="dropdown-item" onClick={() => go("/non-mls/referral-fees")}>Highest Referral Fees PAID</button>
            <button className="dropdown-item" onClick={() => go("/non-mls/brokerage-fees")}>Brokerage Fees</button>
            <button className="dropdown-item" onClick={() => go("/non-mls/commission-payouts")}>Commission Payouts</button>
          </div>
        </div>

        <NavLink to="/join" className="nav-link cta" onClick={() => setMenuOpen(false)}>
          Join Now
        </NavLink>
      </nav>
    </header>
  );
}
