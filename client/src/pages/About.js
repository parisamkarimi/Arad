import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-container">
          <div className="centered-heading-container">
            <h2>About Us</h2>
        </div>
          <div className="mission-content">
            <p className="mission-text">
                At ARAD, we believe real estate should work for you — not the fees and bureaucracy. We’re a modern, digital-first brokerage committed to helping agents in [Your Region] maintain an active license and grow their income without paying costly MLS dues, association fees, or dues you don’t need. Whether you’re just starting out, transferring in, or looking to streamline your practice, ARAD provides high-value, low-barrier options so you can hit the ground running.           
            </p>
            <p className="mission-text">
                We’ve built one of the most expansive referral networks in the area, dedicated to maximizing your earnings. When you hang your license with ARAD, you gain access to brokerage-level support, standardized forms, fast payments, modern tools like digital signatures & eChecks, and a transparent commission/referral system that rewards your efforts—no confusing rules, just clear payouts.
            </p>
            <p className='mission-text'>
              For new licensees, ARAD makes it simple to launch your real estate career without overwhelming startup or maintenance costs. For experienced agents transferring in, we offer seamless license transfer support, full paperwork handled for you, and MLS-free real estate practice opportunities. Whether you’re planning to work full-time, take a break, relocating, or stepping back for a while—your license stays alive, your options stay open.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-container">
          <h2 className="section-title">Our Process</h2>
          <p className="process-intro">
            At ARAD, we believe keeping your real estate license active should be simple, affordable, and stress-free. That’s why we’ve designed a streamlined process that removes the hassle of MLS fees and unnecessary paperwork. In just three easy steps, you can activate your license with us and start earning right away.
          </p>
          <div className="process-steps">
            <div className="process-step step-1">
              <div className="step-number">1</div>
              <h3>Complete All Paperwork Digitally</h3>
              <p> We make it simple—use DocuSign to fill out your ARAD contract, state forms, and any required brokerage agreements. Everything can be done online, quickly and securely.</p>
            </div>
            <div className="process-step step-2">
              <div className="step-number">2</div>
              <h3>Submit License or Transfer Forms</h3>
              <p>Whether you’re a new licensee, transferring from another brokerage, or reactivating an inactive license, we walk you through the required state forms. We handle all necessary signatures and submissions so you don’t have to worry.</p>
            </div>
            <div className="process-step step-3">
              <div className="step-number">3</div>
              <h3>Activate and Begin Earning</h3>
              <p>Once documents are signed and approved, your license becomes active under ARAD. From there, you can take advantage of our referral network, non-MLS opportunities, and brokerage support to start generating income immediately.</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;