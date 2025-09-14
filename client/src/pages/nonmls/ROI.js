import React from "react";
import "./roi.css";

export default function ROI() {
  return (
    <main className="roi">
      {/* HERO (white) */}
      <section className="roi-hero">
        <div className="container">
          <p className="eyebrow">Improve Licensing ROI</p>
          <h1>Real Estate License Costs in Nevada</h1>
          <p className="sub">Obtain your license. Find the right broker. Get to work.</p>
          <p className="lead">
            Here’s a clear overview of typical steps and expenses. Getting licensed takes time and some
            investment, but when you compare total costs to your earning potential, the numbers can work
            out in your favor—especially with a low-overhead, referral-friendly brokerage.
          </p>
        </div>
      </section>

      {/* FULL-WIDTH GRADIENT BAND */}
      <section className="roi-band">
        <div className="container">
          <h2>Real Estate Agent Start-Up Costs</h2>
          <p>
            The summary below outlines the common time and money required to launch your real estate
            career in Nevada.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="roi-content">
        <div className="container">
          <div className="grid">
            <article className="card">
              <h3>Start Your Pre-License Education</h3>
              <p>
                Pre-license education typically includes <strong>120 hours</strong> of coursework. Pricing varies
                by provider, but a reasonable estimate is <strong>$300–$500</strong>. Choose a school with flexible
                scheduling and strong test prep so you can pass the first time.
              </p>
              <ul className="list-check">
                <li>120 hours total coursework (varies by provider)</li>
                <li>Study materials and practice exams included with most programs</li>
                <li>Self-paced online options available</li>
              </ul>

              <hr className="divider" />

              <h3>Exam & Application</h3>
              <p>
                After education, you’ll schedule the state exam and complete your application.
                Expect modest fees for fingerprinting, background checks, and the application itself.
              </p>
              <ul className="list-check">
                <li>Exam scheduling & testing center fee</li>
                <li>Fingerprinting / background check</li>
                <li>State application / license fee</li>
              </ul>

              <div className="callout info">
                Exact amounts change—always confirm current fees with the state and your chosen education
                provider before paying.
              </div>
            </article>

            <aside className="side">
              <div className="card compact">
                <h4>Ways to Improve ROI</h4>
                <ul>
                  <li>Join a brokerage with MLS-free options</li>
                  <li>Leverage referrals and builder opportunities</li>
                  <li>Use standardized forms & e-signing to reduce friction</li>
                </ul>
                <a className="btn-primary" href="/join">Join Now</a>
              </div>

              <div className="card compact">
                <h4>What You’ll Use</h4>
                <ul>
                  <li>DocuSign for paperwork</li>
                  <li>eChecks for fast payouts</li>
                  <li>Brokerage support when needed</li>
                </ul>
              </div>
            </aside>
          </div>

          <article className="card mt-24">
            <h3>Ongoing Costs vs. Potential Earnings (Illustrative)</h3>
            <p className="muted">
              Replace example numbers with your market data. Referral income can quickly exceed yearly
              overhead when you keep costs lean.
            </p>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr><th>Item</th><th>Example</th></tr>
                </thead>
                <tbody>
                  <tr><td>Annual brokerage/association overhead</td><td>$150–$600</td></tr>
                  <tr><td>Single referral fee (25% of $9,000 side)</td><td>$2,250</td></tr>
                  <tr><td>Net to agent (before taxes)</td><td>$2,250</td></tr>
                </tbody>
              </table>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
