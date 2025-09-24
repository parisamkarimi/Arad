import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./freeBroker.css";

export default function FreeBroker() {
  useEffect(() => { document.title = "Brokerage Fees | ARAD"; }, []);

  return (
    <main
      className="bf"
      style={{ "--bf-hero": 'url("/assets/commission/hero.jpg")' }}
    >
      {/* HERO */}
      <section className="bf-hero">
        <div className="container">
          <h1>Brokerage Fees</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="bf-body">
        <div className="container bf-grid">
          {/* MAIN CONTENT */}
          <article className="bf-content">
            <h2>Sensible Real Estate Brokerage Fees in Nevada</h2>
            <p>
              Join our brokerage and access practical tools, digital paperwork, and a supportive
              network—without heavy recurring costs. ARAD helps you get the most from your Nevada
              real estate license whether you practice directly or refer.
            </p>

            <h3>What Are the Costs to Hang a Real Estate License?</h3>
            <p>
              Licensees who want to keep an active Nevada license can{" "}
              <NavLink to="/join-now">hang their license with ARAD</NavLink> and avoid MLS-only
              expenses. We provide brokerage forms, DocuSign, and fast eCheck payouts.
            </p>

            <div className="bf-note">
              <strong>Important:</strong> If a license is not renewed within the time period shown on
              the annual invoice, it will be returned to the Nevada Real Estate Division and the
              brokerage agreement will end.
            </div>

            <h3>Real Estate License Reciprocity</h3>
            <p>
              If you already hold an active real estate license in another state, you may be able to
              meet Nevada requirements faster through reciprocity. The Division determines eligibility,
              but the following states currently have reciprocity agreements with Nevada:
            </p>

            <ul className="bf-list two-col">
              <li>Arizona</li>
              <li>Colorado</li>
              <li>Delaware</li>
              <li>Georgia</li>
              <li>Kentucky</li>
              <li>Louisiana</li>
              <li>Minnesota</li>
              <li>Mississippi</li>
              <li>Texas</li>
              <li>Utah</li>
              <li>West Virginia</li>
            </ul>

            <p>
              Reciprocity is particularly useful if you’re moving to another state, live near a
              state border, or assist clients who transact across regions.
            </p>

            <h3>No MLS Fees at Our Referral Brokerage</h3>
            <p>
              When you{" "}
              <NavLink to="/members/Referrals">join as a referral licensee</NavLink>, you are not
              representing clients directly; instead you’re compensated for referring clients to
              working agents. This keeps costs low and preserves flexibility.
            </p>
            <p>
              ARAD offers strong referral splits. The receiving agent/brokerage pays the referral fee
              after closing; ARAD processes the payment and issues your eCheck.
            </p>

            <div className="bf-callout">
              <strong>Tip:</strong> Referral fees are based on the <em>total commission paid</em> at
              close (and never on buyer credits, bonuses, or other incentives). Exact percentages are
              documented in the referral agreement.
            </div>

            <div className="bf-actions">
              <NavLink className="btn-primary" to="/join-now">Join Now</NavLink>
              <NavLink className="btn-outline" to="/members/requestForm">Ask a Question</NavLink>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="bf-side">
            <div className="bf-widget">
              <h4>Search Site</h4>
              <input className="bf-input" placeholder="Type search keywords here" />
            </div>

            <div className="bf-widget">
              <h4>Text Widget</h4>
              <p className="muted">
                Use this area for short helpful notes, links to forms, or reminders about processing
                times. Keep it practical and brief.
              </p>
              <ul className="bf-links">
                <li><NavLink to="/applicants/Activate">Activate Your License</NavLink></li>
                <li><NavLink to="/applicants/Transfer">Transfer Your License</NavLink></li>
                <li><NavLink to="/non-mls/NonMLS">Practice (Non-MLS)</NavLink></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
