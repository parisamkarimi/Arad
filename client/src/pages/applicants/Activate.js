import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./activate.css";

export default function Activate() {
  useEffect(() => {
    document.title = "New Licensees | ARAD";
  }, []);

  const getStartedHref = "/join-now";

  // Put PDFs in /public/assets/docs/... or /public/assets/pdfs/...
  const licenseContractPdf = "/assets/docs/sample-licensee-contract.pdf";
  const stateForm549Pdf = "/assets/docs/state-form-549-sample.pdf";

  const processVideoHref = "https://www.youtube.com/"; // replace later if you want

  return (
    <main
      className="nl-page"
      style={{ "--nl-hero": 'url("/assets/applicants/new-licensees-hero.jpg")' }}
    >
      {/* HERO */}
      <section className="nl-hero">
        <div className="container nl-hero-inner">
          <h1 className="nl-title">New Licensees</h1>
          <p className="nl-intro">
            ARAD is a modern, digital-first brokerage designed to minimize recurring fees while keeping your
            license active. Practice real estate with standardized forms, DocuSign, and clear payout timelines.
          </p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="nl-cta">
        <div className="container">
          <div className="nl-cta-title">Complete all paperwork digitally and online</div>
          <NavLink className="nl-cta-link" to={getStartedHref}>
            CLICK HERE TO GET STARTED
          </NavLink>
        </div>
      </section>

      {/* EXPLAINER */}
      <section className="nl-explain">
        <div className="container">
          <a className="nl-video-link" href={processVideoHref} target="_blank" rel="noreferrer">
            Watch Video
          </a>

          <h2 className="nl-h2">Complete paperwork digitally</h2>
          <p className="nl-copy">
            Transferring from another brokerage? You’ll complete the required state forms (broker signature included)
            and your brokerage documents entirely online. Everything is handled via {" "}
            <strong> Mail</strong>—no office appointment required.
          </p>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="nl-downloads">
        <div className="container">
          <div className="nl-grid-2">
            <div className="dl-card">
              <div className="dl-top">
                <div className="pdf-badge">PDF</div>
                <div className="dl-text">
                  <h3>Sample of Licensee Contract</h3>
                  <p className="dl-sub">Review a sample of the brokerage agreement.</p>
                </div>
              </div>

              <a className="dl-btn" href={licenseContractPdf} target="_blank" rel="noreferrer">
                Download Now
              </a>
            </div>

            <div className="dl-card">
              <div className="dl-top">
                <div className="pdf-badge">PDF</div>
                <div className="dl-text">
                  <h3>Sample of State Form 549</h3>
                  <p className="dl-sub">Preview a sample of the required state form.</p>
                </div>
              </div>

              <a className="dl-btn" href={stateForm549Pdf} target="_blank" rel="noreferrer">
                Download Now
              </a>
            </div>
          </div>

          <p className="nl-note">
            If you have questions about the required documents, please contact ARAD support and include your license
            number (if available).
          </p>
        </div>
      </section>
    </main>
  );
}

