import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./referralFees.css";

export default function ReferralFees() {
  useEffect(() => { document.title = "Highest Referral Fees | ARAD"; }, []);

  return (
    <main
      className="hrf"
      style={{
        "--hrf-hero": 'url("/assets/nonmls/hero.jpg")',
        "--hrf-card": 'url("/assets/join/benefit1.jpg")',
      }}
    >
      {/* HERO */}
      <section className="hrf-hero">
        <div className="container">
          <h1>Referral Fees PAID to out-of-state licensees</h1>
          <p className="sub">
            Refer your Nevada real estate–related business to ARAD and receive up to
            <strong> 40% of the total commission paid</strong>. We document procuring
            cause, track to close, and pay by eCheck.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="hrf-intro">
        <div className="container">
          <p className="muted small">
            ARAD membership is not required to participate in our large referral network. Out-of-state
            licensees may refer Nevada real estate clients and be paid their referral through broker-to-broker
            agreement. Our Nevada licensees establish a written referral agreement that defines all commissions
            and referral fees, then ARAD pays after close of escrow.
          </p>
          <p className="muted small">
            Complete the referral contact form below. We’ll confirm your procuring cause in writing and start the process.
          </p>
        </div>
      </section>

      {/* BLUE BAND */}
      <section className="hrf-band">
        <div className="container">
          <h2>Our licensees know Nevada Real Estate</h2>
          <p>
            The ARAD family of companies has 200+ licensees ready to receive out-of-state referrals.
            We keep you informed at each step, work the file with Nevada-based expertise, and ensure
            your clients are taken care of through a successful closing.
          </p>
        </div>
      </section>

      {/* SUMMARY STEPS */}
      <section className="hrf-steps">
        <div className="container">
          <h3>Summary of the referral process</h3>
          <ol className="steps">
            <li>
              Complete the <NavLink to="/members/referrals">referral contact form</NavLink> and include your
              out-of-state license number as part of the contact.
            </li>
            <li>
              ARAD assigns a Nevada licensee to work the file. We prepare the written referral agreement for
              signature by all brokers involved.
            </li>
            <li>
              Our Nevada licensee works the transaction to provide the best service possible.
            </li>
            <li>
              After close, ARAD pays your referral fee in accordance with the agreement.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA + IMAGE CARD */}
      <section className="hrf-cta">
        <div className="container cta-grid">
          <div className="cta-copy">
            <h3>Complete the contact form to start the referral process</h3>
            <p>
              Ready to refer? Start here. A member of our referral team will reach out quickly and
              begin the paperwork.
            </p>
            <NavLink className="btn-primary" to="/members/referrals">
              Referral Contact
            </NavLink>
          </div>
          <aside className="cta-card" aria-hidden="true" />
        </div>
      </section>
    </main>
  );
}
