import React from "react";
import "./members.css";

export default function LicenseStatus() {
  return (
    <div className="mb-wrap">
      <section className="mb-hero">
        <h1>License Status</h1>
        <p>Verify your active status and keep your information up to date with the state.</p>
      </section>

      <section className="mb-grid">
        <article className="mb-card">
          <h2>Check & Maintain</h2>
          <ul>
            <li>Confirm your license is active and in good standing via the state licensing portal.</li>
            <li>Update contact info (address, email, phone) when it changes.</li>
            <li>Track education/renewal deadlines to avoid lapses.</li>
          </ul>

          <div className="mb-callout">
            Need help finding your record or renewal window? Submit a request and we’ll point you to the right page.
          </div>
        </article>

        <aside className="mb-side">
          <div className="mb-card">
            <h2>Need Assistance?</h2>
            <p>We can help locate your state record and note upcoming deadlines.</p>
            <a href="/members/request-form" className="btn-primary">Request Help</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
