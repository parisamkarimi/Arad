import React from "react";
import "./nonmls.css";

export default function Practicing() {
  return (
    <div className="nl-wrap">
      <section className="nl-hero">
        <h1>Practicing Real Estate Without the MLS</h1>
        <p>Keep your license active and earn through referrals, new-home opportunities, and partnerships—without paying MLS dues.</p>
      </section>

      <section className="nl-grid">
        <article className="nl-card">
          <h2>How It Works</h2>
          <ul>
            <li><strong>Referral placement:</strong> Submit a written referral; we acknowledge procuring cause and track it to closing.</li>
            <li><strong>Standardized forms:</strong> Use brokerage-approved forms and DocuSign for a fully digital workflow.</li>
            <li><strong>New homes & builders:</strong> Work with sales centers and earn when your buyer closes.</li>
            <li><strong>Partner locally:</strong> Team with an in-market licensee when on-the-ground support is needed.</li>
          </ul>

          <div className="nl-callout">
            Tip: Document every hand-off (email + signed referral form). It protects procuring cause and speeds up payouts.
          </div>

          <h2>3-Step Start</h2>
          <ol>
            <li>Complete ARAD onboarding (DocuSign).</li>
            <li>Submit your referral or opportunity details.</li>
            <li>Track status through closing and receive eCheck payout.</li>
          </ol>
        </article>

        <aside className="nl-side">
          <div className="nl-card">
            <h2>You’ll Use</h2>
            <ul>
              <li>DocuSign for all paperwork</li>
              <li>eChecks for fast payouts</li>
              <li>Brokerage support when needed</li>
            </ul>
            <a href="/join" className="btn-primary">Join Now</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
