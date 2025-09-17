import React from "react";
import "./nvBusiness.css";

export default function NvBusinessLicense() {
  // Edit these URLs if you want to point to exact pages later
  const EMAIL = "mailto:BLCompliance@sos.nv.gov";
  const SILVERFLUME = "https://www.nvsos.gov/silverflume";
  const SOS_BUSINESS_LICENSING = "https://www.nvsos.gov";
  const NRS_CH76 = "https://www.leg.state.nv.us/NRS/NRS-076.html";
  const NRS_DEFINITIONS = "https://www.leg.state.nv.us/NRS/NRS-076.html#NRS076Sec020";
  const NRS_EXEMPTIONS  = "https://www.leg.state.nv.us/NRS/NRS-076.html#NRS076Sec100";

  return (
    <main className="nvb" style={{ "--nvb-hero": 'url("/assets/members/hero.jpg")' }}>
      {/* HERO */}
      <section className="nvb-hero">
        <div className="container">
          <div className="nvb-breadcrumb">
            <span>Home</span> <span className="sep">›</span> <span>Nevada Business License</span>
          </div>
          <h1>Nevada Business License</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="nvb-content">
        <div className="container">
          <article className="nvb-card">
            <h3>State of Nevada Business Licensing</h3>

            <p>
              Nevada real estate licensees must maintain a Nevada Business License or a valid exemption.
            </p>

            <div className="nvb-notice">
              <strong>NOTICE:</strong> ARAD and its staff are not legal representatives of the Nevada
              Secretary of State and cannot provide legal advice. Any information provided here reflects
              common filing practices from other licensees. For special situations or detailed guidance,
              please contact the Secretary of State’s compliance team:{" "}
              <a className="nvb-link" href={EMAIL}>BLCompliance@sos.nv.gov</a>.
            </div>

            <ul className="nvb-bullets">
              <li>
                Most real estate licensees file as a <strong>sole proprietor</strong> for either a business
                license or exemption. Choose the option that best fits your business practices and income.
                <ul>
                  <li>
                    See Nevada’s <a className="nvb-link" href={NRS_DEFINITIONS} target="_blank" rel="noreferrer">
                    definitions</a> and{" "}
                    <a className="nvb-link" href={NRS_EXEMPTIONS} target="_blank" rel="noreferrer">
                    exemptions</a>.
                  </li>
                  <li>
                    Read <a className="nvb-link" href={NRS_CH76} target="_blank" rel="noreferrer">
                    Chapter 76</a> for business-license regulations.
                  </li>
                </ul>
              </li>
            </ul>

            <div className="nvb-links">
              <a className="nvb-cta" href={SOS_BUSINESS_LICENSING} target="_blank" rel="noreferrer">
                Secretary of State Business Licensing – forms & FAQs
              </a>
              <a className="nvb-cta" href={SILVERFLUME} target="_blank" rel="noreferrer">
                File online through SilverFlume
              </a>
            </div>

            <p className="nvb-disclaimer">
              ARAD does <strong>not</strong> require a copy of your business license or exemption for our
              internal file. It is the sole responsibility of the licensee to maintain legal authority to
              operate as an independent contractor in the State of Nevada.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

