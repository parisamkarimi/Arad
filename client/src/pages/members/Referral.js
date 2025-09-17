import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./referral.css";

export default function Referral() {
  const navigate = useNavigate();

  const [f, setF] = useState({
    refName: "",
    refPhone: "",
    refLicense: "",
    clientName: "",
    clientPhone: "",
    notes: "",
  });
  const onChange = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/contact-acknowledgement", { state: { type: "Referral" } });
  };

  return (
    <main
      className="cm"
      style={{ "--cm-hero": 'url("/assets/members/hero.jpg")' }}
    >
      {/* HERO */}
      <section className="cm-hero">
        <div className="container">
          <h1>Current Members</h1>
        </div>
      </section>

      {/* REFERRALS */}
      <section className="cm-referrals">
        <div className="container">
          <div className="cm-grid">
            {/* Left copy */}
            <article className="cm-card cm-copy">
              <h2>Referrals</h2>
              <p>
                Licensees participating in our referral network are encouraged to use the
                brokerage referral form to note themselves as the <strong>procuring cause</strong> for
                the potential real estate client.
              </p>
              <p>
                Or send the referral by email including the info on the right if you’re unable to
                complete the form:<br />
                <a className="cm-link" href="mailto:referrals@your-domain.com">
                  referrals@your-domain.com
                </a>
              </p>
              <p className="cm-footnote">
                <em>
                  *Submitting the brokerage referral form verifies procuring cause for the
                  referring licensee. A partner licensee will acknowledge and contact the client.
                </em>
              </p>
            </article>

            {/* Right form */}
            <form className="cm-card cm-form" onSubmit={onSubmit}>
              <div className="cm-fields">
                <input
                  className="cm-input"
                  name="refName"
                  value={f.refName}
                  onChange={onChange}
                  placeholder="Name of Licensee Referring Client"
                  required
                />
                <input
                  className="cm-input"
                  name="refPhone"
                  value={f.refPhone}
                  onChange={onChange}
                  placeholder="Telephone of Licensee Referring Client"
                />
                <input
                  className="cm-input"
                  name="refLicense"
                  value={f.refLicense}
                  onChange={onChange}
                  placeholder="Nevada Real Estate License Number"
                />
                <input
                  className="cm-input"
                  name="clientName"
                  value={f.clientName}
                  onChange={onChange}
                  placeholder="Name of Potential Client Being Referred"
                  required
                />
                <input
                  className="cm-input"
                  name="clientPhone"
                  value={f.clientPhone}
                  onChange={onChange}
                  placeholder="Telephone / Email of Client"
                />
                <textarea
                  className="cm-input cm-textarea"
                  name="notes"
                  value={f.notes}
                  onChange={onChange}
                  placeholder="Brief Description"
                  rows="3"
                />
              </div>
              <button className="btn-primary w-100" type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* BAND: MEMBER DASHBOARD */}
      <section className="cm-band cm-band-dark">
        <div className="container band-grid">
          <div className="cm-card cm-img">
            <img src="/assets/members/dashboard.png" alt="Member dashboard" />
          </div>

          {/* NOTE: 'light' makes this a white card on the dark band */}
          <div className="cm-card cm-band-card light">
            <h3>Access the Member Dashboard</h3>
            <p>
              Existing licensees can access all pertinent brokerage information within the
              dashboard.
            </p>
            <a
              className="btn-primary"
              href="https://your-dashboard-url.com"
              target="_blank"
              rel="noreferrer"
            >
              Open Dashboard
            </a>
          </div>
        </div>
      </section>

      {/* BAND: NV LICENSE PORTAL */}
      <section className="cm-band cm-band-dark nv-portal">
          <div className="container band-grid">
          <div className="cm-card cm-img">
            <img src="/assets/members/nvseal.png" alt="Nevada seal" />
          </div>

          <div className="cm-card cm-band-card light">
            <h3>Nevada Real Estate License Portal</h3>
            <p>
              Current licensees can view the status of their Nevada real estate license via the
              state’s online portal.
            </p>
            <a
              className="btn-primary"
              href="https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx"
              target="_blank"
              rel="noreferrer"
            >
              Visit Portal
            </a>
          </div>
        </div>
      </section>


    </main>
  );
}
