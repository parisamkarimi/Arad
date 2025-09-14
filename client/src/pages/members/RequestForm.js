import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../join/forms.css";      // reuse polished form styles
import "./members.css";

export default function RequestForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    requestType: "Referral Form",
    message: ""
  });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: POST to your backend or email service
    navigate("/contact-acknowledgement", { state: { type: "Member Request" } });
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <header className="form-header">
          <h1>Member Request Form</h1>
          <p>Select your request and we’ll follow up promptly.</p>
        </header>

        <form className="form" onSubmit={onSubmit}>
          <label>Full Name<input className="input" name="name" value={form.name} onChange={onChange} required /></label>
          <label>Email<input className="input" type="email" name="email" value={form.email} onChange={onChange} required /></label>
          <label>Phone<input className="input" name="phone" value={form.phone} onChange={onChange} /></label>

          <label>Request Type
            <select className="select" name="requestType" value={form.requestType} onChange={onChange}>
              <option>Referral Form</option>
              <option>License Status Help</option>
              <option>Nevada Business License Help</option>
              <option>Transfer Out</option>
              <option>General Question</option>
            </select>
          </label>

          <label>Message (optional)
            <textarea className="textarea" rows="4" name="message" value={form.message} onChange={onChange} />
          </label>

          <div className="actions">
            <button type="submit" className="btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
