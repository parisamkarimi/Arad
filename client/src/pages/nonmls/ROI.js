import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./roi.css";

export default function ROI() {
  useEffect(() => { document.title = "ROI | ARAD"; }, []);

  return (
    <main
      className="roi"
      style={{
        // put your banner photo here (lives in /public)
        "--roi-hero": 'url("/assets/nonmls/hero.jpg")',
        // bottom right image in the CTA
        "--roi-card": 'url("/assets/join/benefit1.jpg")',
      }}
    >
      {/* HERO */}
      <section className="roi-hero">
        <div className="container">
          <h1>Real Estate License Costs in Nevada</h1>
          <p className="tagline">Obtain your license. Find the right broker. Get to work.</p>
          <p className="intro">
            These are the core steps you’ll take to make more money with a real estate
            license. The process is straightforward—and it doesn’t have to involve
            heavy, recurring fees. With any career path, the education and timing take
            some time and money. When you compare the investment you’re making to your
            earning potential, the math usually works in your favor.
          </p>
        </div>
      </section>

      {/* START-UP COSTS */}
      <section className="roi-band">
        <div className="container">
          <h2>Real Estate Agent Start-Up Costs</h2>
          <p className="muted">
            The following details summarize the time and money necessary to obtain
            your real estate license in Nevada.
          </p>
        </div>
      </section>

      <section className="roi-steps">
        <div className="container">
          <div className="step">
            <h3>Start Your Pre-License Education Courses</h3>
            <p>
              Prepare yourself to pass the exam and become a better agent. Nevada
              pre-license education typically includes 120 hours of coursework.
              Costs vary by provider, but commonly range **~$300–$500**. Always
              confirm the latest details with your school.
              {" "}
              <a
                href="https://www.keynv.com" // replace with your preferred provider page
                target="_blank"
                rel="noreferrer"
              >
                See our education provider for additional details
              </a>.
            </p>
          </div>

          <div className="step">
            <h3>Take the Nevada Real Estate Exam</h3>
            <p>
              You’ll have four hours to complete a two-section exam (National and State).
              Passing scores and fees change occasionally—verify with the testing provider.
              If you don’t pass the first time, you can study up and retake quickly.
            </p>
          </div>

          <div className="step">
            <h3>Undergo Fingerprint & Background Check</h3>
            <p>
              Before the Nevada Real Estate Division issues a license, all applicants
              complete a background check and fingerprinting (fee required). Schedule
              this early so results are back by the time your application is ready.
            </p>
          </div>

          <div className="step">
            <h3>Complete the Nevada Real Estate License Application</h3>
            <p>
              Submit the completed application and required fee to the Division.
              Processing times vary—often **about 10 business days**, depending on
              volume. Watch for emails in case additional documents are requested.
            </p>
          </div>

          <div className="step">
            <h3>Keep Your Real Estate License Active</h3>
            <p>
              Within the first year of licensure you’ll complete post-licensing education
              hours; after that, continuing education is due for each renewal period.
              ARAD helps you keep costs predictable while staying compliant.
            </p>
          </div>

          <p className="tiny muted">
            NOTE: Fees and timelines above are estimates and can change. Always confirm with the Nevada
            Real Estate Division and your education/testing providers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="roi-cta">
        <div className="container roi-cta-grid">
          <div className="cta-copy">
            <h3>Join the ARAD Brokerage</h3>
            <p>
              Congratulations! You’ve earned your license—now make it work.
              Hang your license with ARAD to minimize recurring fees, use standardized
              forms and DocuSign, and receive rapid eCheck payouts. Whether you prefer
              non-MLS practice, new-home sales, or referral-only, we’ll help you
              choose the most profitable path.
            </p>
            <div className="cta-actions">
              <NavLink className="btn-primary" to="/contact">Contact Our Firm</NavLink>
              <NavLink className="btn-outline" to="/join-now">Join Now</NavLink>
            </div>
          </div>
          <aside className="cta-card" aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
