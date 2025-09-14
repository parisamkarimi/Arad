import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forms.css";

export default function TransferForm() {
  const navigate = useNavigate();
  const today = useMemo(() => new Date().toISOString().slice(0,10), []);
  const [form, setForm] = useState({
    firstName:"", lastName:"",
    phone:"", email:"",
    street:"", city:"", state:"", zip:"",
    currentBroker:"", licenseNumber:"",
    select1:"I am transferring my license to ARAD and request brokerage assistance to complete the transfer.",
    select2:"I understand ARAD will send DocuSign/transfer forms and applicable membership details.",
    signature:"", date: today
  });

  const onChange = (e)=> setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e)=>{
    e.preventDefault();
    // TODO: send to backend/email service
    navigate("/contact-acknowledgement", { state: { type: "Transfer License" } });
  };

  return (
    <div className="form-page">
      <div className="form-card">
        <header className="form-header">
          <h1>Transfer License – Application</h1>
          <p>Moving from another brokerage? Fill this out—most transfers complete quickly after approvals.</p>
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

          <div className="grid-2">
            <label>
              Current Brokerage
              <input className="input" name="currentBroker" placeholder="Brokerage Name" value={form.currentBroker} onChange={onChange} />
            </label>
            <label>
              License Number
              <input className="input" name="licenseNumber" placeholder="License #" value={form.licenseNumber} onChange={onChange} />
            </label>
          </div>

          <label className="full">
            Select One
            <select className="select" name="select1" value={form.select1} onChange={onChange}>
              <option>I am transferring my license to ARAD and request brokerage assistance to complete the transfer.</option>
              <option>I am reactivating my license at the time of transfer and request guidance.</option>
            </select>
          </label>

          <label className="full">
            Select One
            <select className="select" name="select2" value={form.select2} onChange={onChange}>
              <option>I understand ARAD will send DocuSign/transfer forms and applicable membership details.</option>
              <option>I acknowledge ARAD’s referral and non-MLS practice options.</option>
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
        </form>
      </div>
    </div>
  );
}
