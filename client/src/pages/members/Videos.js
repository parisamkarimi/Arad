import React from "react";
import "./members.css";

export default function Videos() {
  return (
    <div className="mb-wrap">
      <section className="mb-hero">
        <h1>Video</h1>
        <p>Short walkthroughs on common member topics. Replace the demo URLs with your own.</p>
      </section>

      <section className="mb-grid">
        <article className="mb-card">
          <h2>Library</h2>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px"}}>
            <div className="mb-card" style={{padding:0}}>
              <div style={{position:"relative", paddingTop:"56.25%"}}>
                <iframe
                  title="Onboarding"
                  src="https://www.youtube.com/embed/ysz5S6PUM-U"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{position:"absolute", inset:0, width:"100%", height:"100%", border:0, borderRadius:"16px"}}
                />
              </div>
            </div>

            <div className="mb-card" style={{padding:0}}>
              <div style={{position:"relative", paddingTop:"56.25%"}}>
                <iframe
                  title="Submitting a Referral"
                  src="https://www.youtube.com/embed/ScMzIvxBSi4"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{position:"absolute", inset:0, width:"100%", height:"100%", border:0, borderRadius:"16px"}}
                />
              </div>
            </div>
          </div>
        </article>

        <aside className="mb-side">
          <div className="mb-card">
            <h2>Need a Topic Covered?</h2>
            <p>Tell us what you’d like to see next.</p>
            <a href="/members/request-form" className="btn-primary">Request a Video</a>
          </div>
        </aside>
      </section>
    </div>
  );
}
