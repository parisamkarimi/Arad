import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./roi.css";

export default function ROI() {
  useEffect(() => { document.title = "ROI | ARAD"; }, []);

  return (
    <main
      className="roi"
      style={{
        // put your banner photo here (lives in /public)
        "--roi-hero": 'url("/assets/nonmls/hero.jpg")',
        // bottom right image in the CTA
        "--roi-card": 'url("/assets/join/benefit1.jpg")',
      }}
    >
      {/* HERO */}
      <section className="roi-hero">
        <div className="container">
          <h1>Real Estate License Costs in Nevada</h1>
          <p className="tagline">Obtain your license. Find the right broker. Get to work.</p>
          <p className="intro">
            These are the core steps you’ll take to make more money with a real estate
            license. The process is straightforward—and it doesn’t have to involve
            heavy, recurring fees. With any career path, the education and timing take
            some time and money. When you compare the investment you’re making to your
            earning potential, the math usually works in your favor.
          </p>
        </div>
      </section>
    </main>
  );
}
