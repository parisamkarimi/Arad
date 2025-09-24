import React, { useState } from "react";
import "./nonMLS.css";

export default function NonMLS() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    license: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send to your backend / email service
    alert("Thanks! We’ll follow up shortly.");
    setForm({ name: "", email: "", license: "", message: "" });
  };

  return (
    <main
      className="pwm"
      style={{ "--pwm-hero": 'url("/assets/nonmls/hero.jpg")' }}
    >
      {/* HERO */}
      <section className="pwm-hero">
        <div className="container">
          <h1>Practice without the MLS</h1>
        </div>
      </section>

      {/* BODY */}
      <section className="pwm-body">
        <div className="container pwm-grid">
          {/* LEFT: CONTENT */}
          <article className="pwm-content">
            <section className="pwm-block">
              <h3>Keep your license on active status</h3>
              <p>
                You <strong>can</strong> practice real estate without being a
                member of the MLS. Association memberships that control MLS
                access are elective and are not required to hold an active real
                estate license. Join ARAD and avoid recurring association dues
                while keeping your license active.
              </p>
            </section>

            <section className="pwm-block">
              <h3>Represent your client directly</h3>
              <p>
                ARAD doesn’t limit your practice—<strong>you can still represent</strong>{" "}
                clients on transactions that don’t require MLS access. Use
                public research tools your clients already know (e.g.{" "}
                <a href="https://www.homes.com" target="_blank" rel="noreferrer">Homes.com</a>,{" "}
                <a href="https://www.zillow.com" target="_blank" rel="noreferrer">Zillow</a>,{" "}
                <a href="https://www.realtor.com" target="_blank" rel="noreferrer">Realtor.com</a>
                ) and other resources to assist your clients. ARAD provides
                brokerage-standard forms and templates commonly used to
                practice—and resources for <strong>new home sales</strong>{" "}
                across Nevada.
              </p>
              <p className="pwm-note">
                Need to see a sample? Download our sample agreement:{" "}
                <a href="/assets/docs/3PageContract.pdf" target="_blank" rel="noreferrer">
                  3-Page Contract (PDF)
                </a>
                .
              </p>
            </section>

            <section className="pwm-block">
              <h3>Refer your client</h3>
              <p>
                Prefer to refer? Below is a quick summary of referral types and
                how fees are paid.
              </p>

              <h4>In-network referrals</h4>
              <p>
                The customer is referred to an ARAD/partner MLS licensee. These
                licensees are full-time practitioners and members of a regional
                MLS. If a transaction closes, the receiving (accepting) licensee
                is paid <strong>50% of the total commission</strong>. From that
                commission the referring licensee is paid{" "}
                <strong>40% of the total commission</strong> and ARAD retains{" "}
                <strong>10%</strong>.
              </p>
              <p className="pwm-note">
                Submit in-network referrals here:{" "}
                <a href="/members/referrals">/members/referrals</a>
              </p>

              <h4>Out-of-network referrals</h4>
              <p>
                The customer is referred to a licensee outside of the ARAD
                referral network. The referring licensee negotiates the{" "}
                <strong>best available referral percentage</strong> directly.
                ARAD retains <strong>20%</strong> of any referral fee paid as a
                result of the out-of-network referral.
              </p>
            </section>
          </article>

          {/* RIGHT: FORM */}
          <aside className="pwm-form">
            <form onSubmit={onSubmit} className="pwm-card">
              <h3>Quick Contact</h3>

              <label className="pwm-field">
                <span>Your name</span>
                <input
                  className="pwm-input"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label className="pwm-field">
                <span>Your email</span>
                <input
                  className="pwm-input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@something.com"
                  required
                />
              </label>

              <label className="pwm-field">
                <span>Your Nevada Real Estate license number (optional)</span>
                <input
                  className="pwm-input"
                  name="license"
                  value={form.license}
                  onChange={onChange}
                  placeholder="License #"
                />
              </label>

              <label className="pwm-field">
                <span>Your message (optional)</span>
                <textarea
                  className="pwm-input pwm-textarea"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={onChange}
                  placeholder="How can we help?"
                />
              </label>

              <button className="pwm-btn" type="submit">
                Submit
              </button>
            </form>
          </aside>
        </div>
      </section>
    </main>
  );
}

