import React from "react";
import "./nonmls.css";

export default function BrokerageFees() {
  return (
    <div className="nl-wrap">
      <section className="nl-hero">
        <h1>Brokerage Fees</h1>
        <p>Simple, transparent pricing—no surprise add-ons. Replace the sample numbers with your actual fee schedule.</p>
      </section>

      <section className="nl-grid">
        <article className="nl-card">
          <h2>Sample Structure (Edit Me)</h2>
          <table className="nl-table">
            <thead>
              <tr><th>Item</th><th>Example</th></tr>
            </thead>
            <tbody>
              <tr><td>Annual Membership</td><td>$150 (example)</td></tr>
              <tr><td>Per Referral Admin</td><td>$0 (example)</td></tr>
              <tr><td>Non-MLS Transaction Support</td><td>Included (example)</td></tr>
            </tbody>
          </table>

          <div className="nl-callout">
            Replace example amounts with your real pricing before publishing.
          </div>
        </article>

        <aside className="nl-side">
          <div className="nl-card">
            <h2>Questions?</h2>
            <p>We’ll walk you through the best plan for your goals.</p>
            <a href="/contact" className="btn-primary">Contact Us</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
