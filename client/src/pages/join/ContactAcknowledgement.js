import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./forms.css";

export default function ContactAcknowledgement() {
  const { state } = useLocation();
  const type = state?.type || "Request";

  return (
    <div className="form-page">
      <div className="form-card">
        <header className="form-header">
          <h1>Thank You</h1>
          <p>Your {type.toLowerCase()} has been received. We’ll contact you shortly.</p>
        </header>
        <div className="actions">
          <NavLink className="btn-primary" to="/">Back to Home</NavLink>
        </div>
      </div>
    </div>
  );
}
