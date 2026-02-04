import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./transfer.css";

export default function Transfer() {
  useEffect(() => { document.title = "How to Transfer Your License | ARAD"; }, []);

  // Replace with your real links/assets
  const startTransferHref   = "/join-now";
  const processVideoHref    = "https://www.youtube.com/"; // optional explainer
  const sampleAgreementPdf  = "/assets/docs/sample-licensee-contract.pdf";
  const sample505Pdf        = "/assets/docs/sample-state-form-505.pdf";
  const nvLookup            = "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx";

  return (
    <main
      className="tl"
      style={{ "--tl-hero": 'url("/assets/applicants/hero.jpg")' }}
    >
      {/* HERO */}
      <section className="tl-hero">
        <div className="container">
          <h1>How to Transfer Your License</h1>
          <p className="sub">
            Moving your license to ARAD is simple and fully digital. We issue your brokerage
            paperwork via email, prepare the state transfer documents, and coordinate
            mailing to the Division. You’ll receive confirmation and a copy for your records.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="tl-cta">
        <div className="container">
          <div className="tl-cta-title">Complete all transfer paperwork online</div>
          <NavLink className="tl-cta-link" to={startTransferHref}>
            START YOUR TRANSFER
          </NavLink>
        </div>
      </section>

      {/* WATCH VIDEO + OVERVIEW */}
      <section className="tl-overview">
        <div className="container">
          <a className="tl-video-link" href={processVideoHref} target="_blank" rel="noreferrer">
            Watch a quick video on the process
          </a>

          <h2 className="tl-h2">What to Expect</h2>
          <p className="tl-copy">
            If you are transferring from another brokerage, you’ll complete required state forms
            (broker signature included) and your ARAD association forms with <strong>Email</strong>.
            Transfers are completed via <strong>US Mail</strong> to the Division; you’ll be emailed
            a copy of the mailed state form for your records.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS + CHECKLIST */}
      <section className="tl-how">
        <div className="container tl-grid-2">
          <article className="tl-panel">
            <h2>Step-by-Step</h2>
            <ol className="tl-steps">
              <li>Submit your request to start the transfer with ARAD.</li>
              <li>Complete brokerage agreements via email.</li>
              <li>Provide key info: license number, current brokerage, and mailing address.</li>
              <li>ARAD prepares state transfer paperwork and mails it to the Division.</li>
              <li>
                You receive a copy of the mailed form. The Division updates your license to
                reflect ARAD as the brokerage.
              </li>
              <li>
                Check your status on the Division’s site (typically <strong>3–5 business days</strong> after
                processing).
              </li>
            </ol>

            <div className="tl-callout">
              All paperwork is digital. No office appointment required. We’ll confirm the transfer
              and help with timing if you have a pending transaction.
            </div>
          </article>

          <aside className="tl-panel">
            <h3>What You’ll Need</h3>
            <ul className="tl-check">
              <li>NV Real Estate license number</li>
              <li>Current brokerage name</li>
              <li>Legal name & contact info</li>
              <li>Mailing address for state correspondence</li>
            {/* <li>Signed ARAD association docs (DocuSign)</li> */}
            </ul>

            <div className="tl-btns">
              <NavLink className="btn-primary" to={startTransferHref}>Start Transfer</NavLink>
              <NavLink className="btn-outline" to="/members/request-form">Ask a Question</NavLink>
            </div>
          </aside>
        </div>
      </section>

      {/* TIMELINE + STATUS */}
      <section className="tl-info">
        <div className="container tl-grid-2">
          <article className="tl-card">
            <h3>Typical Timeline</h3>
            <ul className="tl-timeline">
             { /*<li><span>Same day</span> DocuSign brokerage agreements</li>*/}
              <li><span>1 business day</span> ARAD prepares & mails state transfer paperwork</li>
              <li><span>3–5 business days</span> Division posts your updated brokerage</li>
            </ul>
            <p className="muted">Times can vary based on mailing and Division processing volume.</p>
          </article>

          <article className="tl-card">
            <h3>Check Your License Status</h3>
            <p className="tl-copy">
              Use the Nevada Division’s lookup to confirm the transfer is posted under ARAD.
            </p>
            <a className="tl-portal" href={nvLookup} target="_blank" rel="noreferrer">
              Visit License Lookup
            </a>
          </article>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="tl-downloads">
        <div className="container tl-grid">
          <article className="dl-card">
            <div className="dl-top">
              <span className="pdf-badge">PDF</span>
              <h3>Sample of Licensee Agreement</h3>
              <p className="dl-sub">Preview the brokerage agreement before you sign.</p>
            </div>
            <a className="dl-btn" href={sampleAgreementPdf} target="_blank" rel="noreferrer">
              Download Now
            </a>
          </article>

          <article className="dl-card">
            <div className="dl-top">
              <span className="pdf-badge">PDF</span>
              <h3>Sample of State Transfer Form (505)</h3>
              <p className="dl-sub">See a sample of the state form used for transfer.</p>
            </div>
            <a className="dl-btn" href={sample505Pdf} target="_blank" rel="noreferrer">
              Download Now
            </a>
          </article>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="tl-cta-strip">
        <div className="container cta-wrap">
          <div className="cta-text">Ready to move your license to a modern, digital brokerage?</div>
          <div className="cta-actions">
            <NavLink className="btn-primary" to={startTransferHref}>Start Transfer</NavLink>
            <NavLink className="btn-outline light" to="/contact">Talk to Us</NavLink>
          </div>
        </div>
      </section>
    </main>
  );
}

