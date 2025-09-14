import React from "react";
import "./members.css";

export default function Referral() {
  return (
    <div className="mb-wrap">
      <section className="mb-hero">
        <h1>Referral</h1>
        <p>Submit written referrals and keep earning—ARAD documents procuring cause and tracks through closing.</p>
      </section>

      <section className="mb-grid">
        <article className="mb-card">
          <h2>How It Works</h2>
          <ol>
            <li>Send a written referral (we’ll provide the template via DocuSign).</li>
            <li>We acknowledge procuring cause and introduce a partner licensee if needed.</li>
            <li>Deal status is tracked; payout issued via eCheck after closing.</li>
          </ol>

          <div className="mb-callout">
            Best practice: include client contact info + a brief handoff note to lock in procuring cause.
          </div>

          <h2>What You’ll Need</h2>
          <ul>
            <li>Client name & contact details</li>
            <li>Property / area or builder info</li>
            <li>Any timelines or special notes</li>
          </ul>
        </article>

        <aside className="mb-side">
          <div className="mb-card">
            <h2>Start a Referral</h2>
            <p>We’ll send you a DocuSign referral form.</p>
            <a href="/members/request-form" className="btn-primary">Request Form</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
