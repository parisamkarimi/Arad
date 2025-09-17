import React from "react";
import { NavLink } from "react-router-dom";
import "./licenseStatus.css";

export default function LicenseStatus() {
  const NV_LOOKUP   = "https://red.prod.secure.nv.gov/Lookup/LicenseLookup.aspx";
  const DASHBOARD   = "https://your-dashboard-url.com"; // change to your real dashboard

  return (
    <main className="ls" style={{ "--ls-hero": 'url("/assets/members/hero.jpg")' }}>
      {/* HERO */}
      <section className="ls-hero">
        <div className="container">
          <div className="ls-breadcrumb">
            <span>Home</span> <span className="sep">›</span> <span>License Status</span>
          </div>
          <h1>License Status</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="ls-content">
        <div className="container">
          <article className="ls-card">
            <ul className="ls-list">
              <li>
                <a className="ls-link" href={NV_LOOKUP} target="_blank" rel="noreferrer">
                  Click here to check the legal status of your license
                </a>
                <ul className="ls-sub">
                  <li>
                    View license details to confirm status and that it’s hanging under ARAD (your brokerage) name.
                  </li>
                </ul>
              </li>

              <li className="ls-block">
                <a className="ls-link" href={DASHBOARD} target="_blank" rel="noreferrer">
                  Click here to be taken to your licensee dashboard
                </a>
                <ul className="ls-sub">
                  <li>Use the dashboard to access forms and broker information documents.</li>
                  <li>
                    <NavLink className="ls-link" to="/contact">
                      Contact the brokerage with additional questions
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </main>
  );
}

