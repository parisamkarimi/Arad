import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./transferOut.css";

export default function TransferOut() {
  const navigate = useNavigate();

  // External links (update if you have official URLs for the forms)
  const NV_LICENSE_LOOKUP = "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx";
  const FORM_505 = "#"; // replace with Nevada RED Form 505 URL if desired
  const FORM_504 = "#"; // replace with Nevada RED Form 504 URL if desired
  const FORM_544 = "#"; // replace with Nevada RED Form 544 URL if desired

  const [f, setF] = useState({
    first: "",
    last: "",
    license: "",
    phone: "",
    email: "",
    newBrokerage: "",
    newBrokerName: "",
    newBrokerEmail: "",
    newOfficeAddress: "",
    effectiveDate: "",
    delivery: "DocuSign",
    notes: "",
    agree: false,
    typedSignature: "",
    sigDate: new Date().toISOString().slice(0, 10),
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setF((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // POST to your backend if needed, then:
    navigate("/contact-acknowledgement", { state: { type: "Transfer Out" } });
  };

  return (
    <main
      className="to"
      style={{ "--to-hero": 'url("/assets/members/transfer-hero.jpg")' }}
    >
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

      {/* INFO / NOTES (matches the format in your screenshot) */}
      <section className="to-info">
        <div className="container">
          <div className="to-card">
            <p className="to-muted">
              Licensees seeking to <strong>transfer in</strong> to ARAD should follow the steps on our
              prospective licensee page.
            </p>

            <p className="to-note-line">
              <span className="to-note-flag">NOTE:</span> ARAD will <strong>ONLY</strong> terminate /
              send the termination paperwork to the Nevada Real Estate Division <strong>via US Mail</strong>.
              We complete the transfer paperwork within one (1) business day of receiving this request
              and email you a copy of the completed / mailed termination paperwork for your records.
            </p>

            <h2 className="to-emph">
              ARAD does not complete transfer paperwork in person, and ARAD will not release a license
              to be hand-carried.
            </h2>

            <p>
              ARAD licensees can request their license to be returned to the Nevada Real Estate Division
              via US Mail by completing and submitting the form on this page.
            </p>

            <h3 className="to-seq-title">Sequence of events to transfer out:</h3>
            <ol className="to-seq">
              <li>
                After you submit this form, ARAD prepares and mails the required state paperwork
                (state <a className="to-link" href={FORM_505} target="_blank" rel="noreferrer">Form 505</a>)
                along with the original Nevada real estate license to the Division. A copy of the
                completed Form 505 is also emailed to you (DocuSign PDF) for your records. No action is
                required from you on this copy.
              </li>
              <li>
                The physical license and Form 505 are delivered to the Nevada Real Estate Division by
                US Mail within one (1) business day of completing Form 505.
              </li>
              <li>
                The Division processes Form 505 and your license reflects an <strong>Inactive</strong> status
                on the Division site. This typically posts within 3–5 business days. You can check your
                status here:{" "}
                <a className="to-link" href={NV_LICENSE_LOOKUP} target="_blank" rel="noreferrer">
                  Nevada License Lookup
                </a>.
              </li>
              <li>
                Once inactive, you have <strong>30 days</strong> to complete state{" "}
                <a className="to-link" href={FORM_504} target="_blank" rel="noreferrer">Form 504</a>{" "}
                to assign the new brokerage. Submit the completed form to the Nevada Real Estate Division.
                <span className="to-inline-note">
                  &nbsp;The Division enforces inactive-renewed penalties if the transfer does not occur within
                  30 days; see{" "}
                  <a className="to-link" href={FORM_544} target="_blank" rel="noreferrer">Form 544</a>
                  &nbsp;for penalty details.
                </span>
              </li>
            </ol>

            <p className="to-smallprint">
              By submitting the form below, you are requesting ARAD to mail the license and{" "}
              <a className="to-link" href={FORM_505} target="_blank" rel="noreferrer">Form 505</a>{" "}
              to the Nevada Real Estate Division and acknowledge that you must re-associate with another
              brokerage within 30 days to avoid additional penalties as noted on{" "}
              <a className="to-link" href={FORM_544} target="_blank" rel="noreferrer">Form 544</a>.
            </p>
          </div>
        </div>
      </section>

      {/* FORM (professional, matches your site’s styling) */}
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
                placeholder="YOUR Mailing Address including ZIP CODE"
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

            {/* Optional: replace with your actual reCAPTCHA */}
            <div className="slim-captcha">[reCAPTCHA widget placeholder]</div>

            <button type="submit" className="slim-submit">Send</button>
          </form>
        </div>
      </section>
    </main>
  );
}
