import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css";

export default function NewLicenseForm() {
  const navigate = useNavigate();
  const today = useMemo(() => new Date().toISOString().slice(0,10), []);
  const [form, setForm] = useState({
    firstName:"", lastName:"",
    phone:"", email:"",
    street:"", city:"", state:"", zip:"",
    select1:"I am a new licensee (applying for a new NV real estate license) and I am requesting the brokerage supply documentation as required.",
    select2:"I am selecting to pay for a one year membership and understand the worksheet/DocuSign will be provided to me.",
    signature:"", date: today
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send to your backend/email service here
    // await fetch("/api/join/new-license", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(form) });
    navigate("/contact-acknowledgement", { state: { type: "New License" } });
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <header className="form-header">
          <h1>New License – Application</h1>
          <p>Complete the form below. We’ll follow up with DocuSign and next steps.</p>
        </header>

        <form onSubmit={onSubmit}>
          <div className="grid-2">
            <label>
              First Name:*
              <input className="input" name="firstName" placeholder="First Name" value={form.firstName} onChange={onChange} required />
            </label>
            <label>
              Last Name:*
              <input className="input" name="lastName" placeholder="Last Name" value={form.lastName} onChange={onChange} required />
            </label>
          </div>

          <div className="grid-2">
            <label>
              Phone Number:*
              <input className="input" name="phone" placeholder="Phone Number" value={form.phone} onChange={onChange} required />
            </label>
            <label>
              Email Address:*
              <input className="input" type="email" name="email" placeholder="you@something.com" value={form.email} onChange={onChange} required />
            </label>
          </div>

          <label className="full">
            Street Address:
            <input className="input" name="street" placeholder="Street Address" value={form.street} onChange={onChange} />
          </label>

          <div className="grid-3">
            <label>
              City
              <input className="input" name="city" placeholder="City" value={form.city} onChange={onChange} />
            </label>
            <label>
              State
              <input className="input" name="state" placeholder="State" value={form.state} onChange={onChange} />
            </label>
            <label>
              Zip Code
              <input className="input" name="zip" placeholder="Zip" value={form.zip} onChange={onChange} />
            </label>
          </div>

          <label className="full">
            Select One
            <select className="select" name="select1" value={form.select1} onChange={onChange}>
              <option>I am a new licensee (applying for a new NV real estate license) and I am requesting the brokerage supply documentation as required.</option>
              <option>I am reactivating a license and request brokerage assistance to complete requirements.</option>
              <option>I am an out-of-state licensee seeking guidance on reciprocity requirements.</option>
            </select>
          </label>

          <label className="full">
            Select One
            <select className="select" name="select2" value={form.select2} onChange={onChange}>
              <option>I am selecting to pay for a one year membership and understand the worksheet/DocuSign will be provided to me.</option>
              <option>I prefer month-to-month terms if available and understand DocuSign will reflect that.</option>
            </select>
          </label>

          <p className="ack full">
            I acknowledge that I have read all of the above statements and that I understand them.
          </p>

          <div className="grid-2">
            <label>
              Signature of Applicant*
              <input className="input" name="signature" placeholder="Enter name as acknowledgement" value={form.signature} onChange={onChange} required />
            </label>
            <label>
              Date*
              <input className="input" type="date" name="date" value={form.date} onChange={onChange} required />
            </label>
          </div>

          <div className="actions">
            <button type="submit" className="btn-primary">Submit</button>
          </div>
          {/* reCAPTCHA could go here if you add keys later */}
        </form>
      </div>
    </div>
  );
}

