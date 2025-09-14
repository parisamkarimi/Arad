import React from "react";
import { NavLink } from "react-router-dom";
import "./joinNow.css"; // ⬅️ add this file (below)

export default function JoinNow() {
  return (
    <main className="jn">
      {/* HERO / WHY JOIN */}
      <section className="jn-hero">
        <h1>Why Join ARAD?</h1>

        <div className="jn-benefits">
          <article className="jn-benefit-card" style={{ "--bg": 'url("/assets/join/benefit1.jpg")' }}>
            <div className="jn-benefit-body">
              <h3>Join a Leading Non-MLS Network</h3>
              <p>Keep your license active and earn without paying MLS dues.</p>
            </div>
          </article>

          <article className="jn-benefit-card" style={{ "--bg": 'url("/assets/join/benefit2.jpg")' }}>
            <div className="jn-benefit-body">
              <h3>Avoid Unnecessary Fees</h3>
              <p>Simple, transparent pricing — focus on income, not overhead.</p>
            </div>
          </article>

          <article className="jn-benefit-card" style={{ "--bg": 'url("/assets/join/benefit3.jpg")' }}>
            <div className="jn-benefit-body">
              <h3>All-Digital Brokerage</h3>
              <p>DocuSign paperwork + fast eCheck payouts = zero hassle.</p>
            </div>
          </article>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="jn-cta">
        <h2>Let’s Get Started</h2>
      </section>

      {/* TWO OPTION CARDS */}
      <section className="jn-options">
        <div className="jn-card">
          <div className="jn-card-head">
            <span className="jn-badge">NEW</span>
            <h3>New Licensees</h3>
          </div>

          <hr className="jn-divider" />

          <p className="jn-lead">
            Startup and maintenance costs can add up. ARAD offers affordable plans to
            establish and maintain your license — with referral / license-hanging and
            non-MLS practice options.
          </p>

          <ul className="jn-list">
            <li>Digital onboarding via DocuSign</li>
            <li>Brokerage support & standardized forms</li>
            <li>Fast eCheck payments</li>
          </ul>

          <div className="jn-actions">
            <NavLink to="/join/new-license" className="btn-primary">Start New License</NavLink>
            
          </div>
        </div>

        <div className="jn-card">
          <div className="jn-card-head">
            <span className="jn-icon" aria-hidden>✈️</span>
            <h3>Transferring Licensees</h3>
          </div>

          <hr className="jn-divider" />

          <p className="jn-lead">
            A cost-effective way to maintain your license and keep earning.
            Transfer to ARAD for referral / license-hanging and non-MLS practice options.
          </p>

          <ul className="jn-list">
            <li>DocuSign transfer forms</li>
            <li>Guided, fast activation</li>
            <li>Referral & non-MLS opportunities</li>
          </ul>

          <div className="jn-actions">
            <NavLink to="/join/transfer" className="btn-primary">Transfer My License</NavLink>
            
          </div>
        </div>
      </section>
    </main>
  );
}

