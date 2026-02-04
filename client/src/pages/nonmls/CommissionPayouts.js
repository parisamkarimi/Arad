import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./commissionPayouts.css";

export default function CommissionPayouts() {
  useEffect(() => { document.title = "Commission Payouts | ARAD"; }, []);

  return (
    <main
      className="cp"
      style={{
        "--cp-hero": 'url("/assets/commission/hero.jpg")',          // optional banner
        "--cp-card": 'url("/assets/commission/hand-house.jpg")',     // right-side image
      }}
    >
      {/* HERO */}
      <section className="cp-hero">
        <div className="container">
          <div className="cp-crumb">Commission Payouts</div>
          <h1>Traditional Real Estate Commissions & Referral Fees</h1>
          <p className="cp-sub">
            Clear timelines and documentation—paid via eCheck after brokerage receipt
            and reconciliation. Learn how commission and referral income works at ARAD.
          </p>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="cp-intro">
        <div className="container cp-grid">
          <div className="cp-col">
            <h2>Traditional Real Estate Commissions</h2>
            <p>
              ARAD permits the practice of real estate without being a member of an MLS.
              Our policies define how commissions are split and how payouts are delivered.
              You’ll use brokerage-standard forms and DocuSign for clean, compliant files.
            </p>

            <h2>Generous Real Estate Referral Fees</h2>
            <p>
              Prefer to refer? We pay strong referral fees to our licensees. You can refer
              locally or nationwide while remaining on active status. We’ll confirm procuring
              cause in writing and track it through closing, then pay you by eCheck.
            </p>
          </div>

          <aside className="cp-card" aria-hidden="true" />
        </div>
      </section>

      {/* KNOWLEDGE BAND */}
      <section className="cp-band">
        <div className="container cp-2col">
          <article className="cp-panel">
            <h3>What Is a Real Estate Referral Agreement?</h3>
            <p>
              A referral agreement is an arrangement between two licensees where one agent
              introduces a client to another agent who will service the transaction. The
              agreement specifies the referral percentage and when it’s earned—typically upon
              broker receipt of commission after a successful close of escrow.
            </p>
            <p>
              Referral agreements are common for agents practicing part-time, outside a target
              geography, or when a specialist is a better fit for the client. ARAD documents
              procuring cause so your referral is protected.
            </p>
          </article>

          <article className="cp-panel">
            <h3>Referral Fee vs. Commission</h3>
            <p>
              Both are compensation, but a <em>referral fee</em> is paid between brokerages for
              the introduction of a client, whereas a <em>commission</em> is paid for the
              representation work on the transaction itself. Referral fees are not uniform—
              they’re negotiated case-by-case and documented before engagement.
            </p>
            <p>
              At ARAD, we negotiate fair, market-rate referral terms and handle brokerage-to-brokerage
              paperwork to streamline payment after closing.
            </p>
          </article>
        </div>
      </section>

      {/* CLOSER */}
      <section className="cp-close">
        <div className="container">
          <h3>Welcome to the ARAD Network</h3>
          <p>
            Put your real-estate license to work with one of Nevada’s most flexible non-MLS and
            referral networks. Whether you have years of production or you’re easing back in,
            you’ll enjoy digital paperwork, clear timelines.
          </p>
        <div className="cp-actions">
          
          <NavLink className="btn-outline" to="/members/request-form">Ask a Question</NavLink>
       </div>

        </div>
      </section>
    </main>
  );
}
