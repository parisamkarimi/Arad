import React from "react";
import "./nonmls.css";

export default function ReferralFees() {
  return (
    <div className="nl-wrap">
      <section className="nl-hero">
        <h1>Highest Referral Fees PAID</h1>
        <p>Competitive, clearly documented referral payouts—tracked from referral to closing.</p>
      </section>

      <section className="nl-grid">
        <article className="nl-card">
          <h2>Our Approach</h2>
          <ul>
            <li><strong>Procuring cause documented:</strong> Written referral acknowledged by the brokerage.</li>
            <li><strong>Transparent statements:</strong> You see the math behind every payout.</li>
            <li><strong>Timely payments:</strong> eChecks issued after brokerage receipt of funds.</li>
          </ul>

          <div className="nl-callout">
            Exact percentages may vary by agreement and partner brokerage. Keep your signed referral acknowledgment for your records.
          </div>
        </article>

        <aside className="nl-side">
          <div className="nl-card">
            <h2>Need a Template?</h2>
            <p>Use our ready-to-send referral form to lock in procuring cause.</p>
            <a href="/join" className="btn-primary">Get Started</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
