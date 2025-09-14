import React from "react";
import "./nonmls.css";

export default function CommissionPayouts() {
  return (
    <div className="nl-wrap">
      <section className="nl-hero">
        <h1>Commission Payouts</h1>
        <p>Clear timelines and documentation—paid via eCheck after brokerage receipt and reconciliation.</p>
      </section>

      <section className="nl-grid">
        <article className="nl-card">
          <h2>Timeline (Typical)</h2>
          <ol>
            <li>Closing occurs with partner brokerage.</li>
            <li>Funds received and cleared by ARAD.</li>
            <li>Statement issued and eCheck sent.</li>
          </ol>

          <h2>What Helps Speed Things Up</h2>
          <ul>
            <li>Signed referral acknowledgment on file</li>
            <li>Accurate contact & deal info from the start</li>
            <li>Quick responses to any closing questions</li>
          </ul>
        </article>

        <aside className="nl-side">
          <div className="nl-card">
            <h2>Get Started</h2>
            <p>Send your first referral today and we’ll handle the rest.</p>
            <a href="/join" className="btn-primary">Join Now</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
