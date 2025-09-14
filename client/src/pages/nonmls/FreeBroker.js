import React from "react";
import "./nonmls.css";

export default function FreeBroker() {
  return (
    <div className="nl-wrap">
      <section className="nl-hero">
        <h1>MLS-Free Broker</h1>
        <p>Practice legally and professionally without MLS membership using ARAD’s digital brokerage model.</p>
      </section>

      <section className="nl-grid">
        <article className="nl-card">
          <h2>What You Get</h2>
          <ul>
            <li>DocuSign paperwork and standardized forms</li>
            <li>Referral & non-MLS practice pathways</li>
            <li>Brokerage-level support when you need it</li>
            <li>Fast eCheck commission payouts</li>
          </ul>

          <h2>Who It’s For</h2>
          <ul>
            <li>Agents taking a break from the MLS</li>
            <li>Relocating, part-time, or retiring pros</li>
            <li>New licensees keeping costs low</li>
          </ul>
        </article>

        <aside className="nl-side">
          <div className="nl-card">
            <h2>Next Step</h2>
            <p>Start with a quick DocuSign onboarding—no office visits required.</p>
            <a href="/join" className="btn-primary">Join Now</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
