import React from "react";
import "./members.css";

export default function NVBusinessLicense() {
  return (
    <div className="mb-wrap">
      <section className="mb-hero">
        <h1>Nevada Business License</h1>
        <p>Understand the basics of obtaining and renewing your Nevada business license.</p>
      </section>

      <section className="mb-grid">
        <article className="mb-card">
          <h2>Overview</h2>
          <ul>
            <li>Many agents maintain a Nevada business license with the Secretary of State.</li>
            <li>Keep your entity name/address consistent with your real estate records.</li>
            <li>Renew on time and keep certificates handy for brokerage or taxation needs.</li>
          </ul>

          <h2>Checklist</h2>
          <ul>
            <li>Confirm entity type and registered agent</li>
            <li>Renew business license before expiration</li>
            <li>Save confirmation/receipts for your records</li>
          </ul>
        </article>

        <aside className="mb-side">
          <div className="mb-card">
            <h2>Questions?</h2>
            <p>We can share general guidance and where to complete renewals online.</p>
            <a href="/members/request-form" className="btn-primary">Ask a Question</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
