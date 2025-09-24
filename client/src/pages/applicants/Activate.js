import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./activate.css";

export default function Activate() {
  useEffect(() => { document.title = "New Licensees | ARAD"; }, []);

  // Replace these with your real links/files
  const getStartedHref = "/join-now";
  const processVideoHref = "https://www.youtube.com/watch?v=3GwjfUFyY6M"; // placeholder
  const licenseContractPdf = "/assets/docs/sample-licensee-contract.pdf";
  const stateForm549Pdf   = "/assets/docs/state-form-549-sample.pdf";

  return (
    <main
        className="nl"
   style={{ "--nl-hero": 'url("/assets/nonmls/hero.jpg")' }}
    >
      {/* HERO */}
      <section className="nl-hero">
        <div className="container">
          <h1>New Licensees</h1>
          <p className="nl-intro">
            ARAD is a modern, digital-first brokerage designed to minimize recurring fees while
            keeping your license active. Practice real estate with standardized forms, DocuSign,
            and rapid eCheck payouts. Prefer to refer? We maintain some of the highest referral
            splits in the country—choose the path that fits your goals.
          </p>
        </div>
      </section>

      {/* BIG CTA BAND */}
      <section className="nl-cta">
        <div className="container">
          <div className="nl-cta-title">Complete all paperwork digitally and online</div>
          <NavLink className="nl-cta-link" to={getStartedHref}>
            CLICK HERE TO GET STARTED
          </NavLink>
        </div>
      </section>

      {/* WATCH VIDEO + EXPLAINER */}
      <section className="nl-explain">
        <div className="container">
          <a className="nl-video-link" href={processVideoHref} target="_blank" rel="noreferrer">
            Watch a video on the process
          </a>

          <h2 className="nl-h2">Complete paperwork digitally</h2>
          <p className="nl-copy">
            Transferring from another brokerage? You’ll complete the required state forms
            (broker signature included) and your brokerage documents entirely online.
            Everything is handled via <strong>DocuSign</strong> and <strong>US Mail</strong>—no
            office appointment required.
          </p>
        </div>
      </section>

      {/* DOWNLOAD TILES */}
      <section className="nl-downloads">
        <div className="container nl-grid">
          {/* Card 1 */}
          <article className="dl-card">
            <div className="dl-top">
              <span className="pdf-badge">PDF</span>
              <h3>Sample of Licensee Contract</h3>
              <p className="dl-sub">Review a sample of the brokerage agreement.</p>
            </div>
            <a className="dl-btn" href={licenseContractPdf} target="_blank" rel="noreferrer">
              Download Now
            </a>
          </article>

          {/* Spacer paragraph like on Key site */}
          <div className="nl-note">
            Licensees applying for a Nevada Real Estate License must also complete the required state forms.
          </div>

          {/* Card 2 */}
          <article className="dl-card wide">
            <div className="dl-top">
              <span className="pdf-badge">PDF</span>
              <h3>Sample of State Form 549</h3>
              <p className="dl-sub">Preview a sample of the required state form.</p>
            </div>
            <a className="dl-btn" href={stateForm549Pdf} target="_blank" rel="noreferrer">
              Download Now
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}
