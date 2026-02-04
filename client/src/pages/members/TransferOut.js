import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./transferOut.css";

export default function TransferOut() {
  const navigate = useNavigate();

  // External link
  const NV_LICENSE_LOOKUP =
    "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx";

  // ✅ Put PDFs in: client/public/assets/docs/
  // and name them 504.pdf and 505.pdf (recommended)
  const FORM_505 = "/assets/docs/505.pdf";
  const FORM_504 = "/assets/docs/504.pdf";
  const FORM_544 = "/assets/docs/544.pdf"; // optional if you add it later

  const [f, setF] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    license: "",
    reason: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setF((s) => ({ ...s, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-acknowledgement", { state: { type: "Transfer Out" } });
  };

  return (
    <main className="to" style={{ "--to-hero": 'url("/assets/members/transfer-hero.jpg")' }}>
      {/* HERO */}
      <section className="to-hero">
        <div className="container">
          <h1>Request Transfer Out</h1>
          <p className="sub">
            This page is for current ARAD licensees who wish to transfer out of ARAD. You may use
            this form to transfer to another brokerage or back to the State of Nevada (inactive).
          </p>
        </div>
      </section>

      {/* INFO */}
      <section className="to-info">
        <div className="container">
          <div className="to-card">
            <p className="to-note-line">
              <span className="to-note-flag">NOTE:</span> ARAD will <strong>ONLY</strong> send the
              termination paperwork to the Nevada Real Estate Division <strong>via US Mail</strong>.
            </p>

            <h2 className="to-emph">
              ARAD does not complete transfer paperwork in person, and ARAD will not release a license
              to be hand-carried.
            </h2>

            <h3 className="to-seq-title">Sequence of events to transfer out:</h3>
            <ol className="to-seq">
              <li>
                After you submit this form, ARAD prepares and mails the required paperwork (
                <a className="to-link" href={FORM_505} target="_blank" rel="noreferrer" download>
                  Form 505 (PDF)
                </a>
                ) along with the original license to the Division.
              </li>
              <li>
                The physical license and Form 505 are delivered to the Nevada Real Estate Division by
                US Mail within one (1) business day.
              </li>
              <li>
                The Division processes Form 505 and your license reflects an <strong>Inactive</strong>{" "}
                status. Check status here:{" "}
                <a className="to-link" href={NV_LICENSE_LOOKUP} target="_blank" rel="noreferrer">
                  Nevada License Lookup
                </a>
                .
              </li>
              <li>
                Once inactive, you have <strong>30 days</strong> to complete{" "}
                <a className="to-link" href={FORM_504} target="_blank" rel="noreferrer" download>
                  Form 504 (PDF)
                </a>{" "}
                to assign the new brokerage.
                {FORM_544 && (
                  <>
                    {" "}
                    See{" "}
                    <a className="to-link" href={FORM_544} target="_blank" rel="noreferrer" download>
                      Form 544 (PDF)
                    </a>{" "}
                    for penalty details.
                  </>
                )}
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="to-formwrap">
        <div className="container">
          <form className="to-card to-form slim" onSubmit={onSubmit}>
            <div className="slim-field">
              <label className="slim-label">Licensee Name:</label>
              <input
                className="slim-input"
                name="name"
                value={f.name}
                onChange={onChange}
                placeholder="First / Last Name"
                required
              />
            </div>

            <div className="slim-field">
              <label className="slim-label">Email Address:</label>
              <input
                className="slim-input"
                type="email"
                name="email"
                value={f.email}
                onChange={onChange}
                placeholder="you@something.com"
                required
              />
            </div>

            <div className="slim-field">
              <label className="slim-label">FULL US Mailing Address including ZIP CODE:</label>
              <input
                className="slim-input"
                name="address"
                value={f.address}
                onChange={onChange}
                placeholder="Your Mailing Address including ZIP CODE"
                required
              />
            </div>

            <div className="slim-field">
              <label className="slim-label">Phone Number:</label>
              <input
                className="slim-input"
                name="phone"
                value={f.phone}
                onChange={onChange}
                placeholder="Your Phone Number"
              />
            </div>

            <div className="slim-field">
              <label className="slim-label">NV RE License Number:</label>
              <input
                className="slim-input"
                name="license"
                value={f.license}
                onChange={onChange}
                placeholder="NV RE License Number"
              />
            </div>

            <div className="slim-field">
              <label className="slim-label">
                Reason for Transfer noted to form 505 (Example: Change to MLS Broker):
              </label>
              <textarea
                className="slim-input slim-textarea"
                name="reason"
                value={f.reason}
                onChange={onChange}
                placeholder="Message"
                rows={4}
              />
            </div>

            <button type="submit" className="slim-submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}
