import React from "react";
import "./members.css";

export default function TransferOut() {
  return (
    <div className="mb-wrap">
      <section className="mb-hero">
        <h1>Transfer Out</h1>
        <p>Moving to another brokerage? We’ll help you complete transfer paperwork quickly.</p>
      </section>

      <section className="mb-grid">
        <article className="mb-card">
          <h2>Steps</h2>
          <ol>
            <li>Tell us your destination brokerage and timing.</li>
            <li>We’ll prepare any release/transfer forms (DocuSign).</li>
            <li>Coordinate with the state to finalize the change.</li>
          </ol>

          <div className="mb-callout">
            Have any pending referrals/closings? We’ll document everything so your payouts remain clear.
          </div>
        </article>

        <aside className="mb-side">
          <div className="mb-card">
            <h2>Start Transfer</h2>
            <p>We’ll send what you need via DocuSign.</p>
            <a href="/members/request-form" className="btn-primary">Request Transfer</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
