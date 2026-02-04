import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h1>Join Nevada's Best Non MLS Brokerage </h1>
        <p className="hero-subtitle">
          
            Keep your Nevada Real Estate license active without MLS fees, association dues or Realtor expenses
            
        </p>
      </div>
      <div className="hero-overlay"></div>
    </section>

    {/* Verified Impact Metrics */}
    <section className="metrics-section">
      <h3>Are you a new licensee, who's ready to get started? Or a transferring licensee looking for a fresh start?</h3>
      <a>Hang Your License with ARAD
Activate your Nevada license, earn commissions, and avoid MLS fees. We handle all paperwork through DocuSign and provide referral and non-MLS options with full brokerage support—simple, fast, and affordable.
<br></br>
<br></br>
<br></br>
</a>

      <div className="metrics-grid">
        <div className="metric-item edge-highlight" style={{ "--edge-color": "#33A18F" }}>
          <div className="metric-label">Current Members</div>
          <p className="metric-description">ARAD LLC operates one of Nevada’s best real estate referral networks. With ARAD NOW, you can practice real estate without MLS membership, maintain traditional representation, and earn unmatched referral fees. Written referrals are quickly verified, ensuring you’re recognized as the procuring cause.</p>
        </div>
        <div className="metric-item edge-highlight" style={{ "--edge-color": "#496D89" }}>
          <div className="metric-label">New Licensees</div>
          <p className="metric-description">ARAD LLC is an ideal brokerage for new licensees, offering affordable plans to establish and maintain a Nevada real estate license. Avoid high startup and maintenance costs while practicing referral and non-MLS real estate with your active license.</p>
        </div>
        <div className="metric-item edge-highlight" style={{ "--edge-color": "#A6645D" }}>
          <div className="metric-label">Transferring Licensees</div>
          <p className="metric-description">ARAD LLC is a top choice for licensees seeking a cost-effective way to maintain their Nevada real estate license. The brokerage offers both referral placement and non-MLS practice options, with simple steps to transfer your license and get started.</p>
        </div>
      </div>
    </section>
      {/* Process Flow */}
{/* Process Flow */}
<section className="process-section-home">
  <h2>Modern Brokerage. No MLS Fees. Full Support.</h2>
  <div className="process-steps-home">
    <div className="step-home">
      <div className="step-number-home">1</div>
      <h3>Keep your license active</h3>
      <p>
        
         <li>Done with fees & dues?</li>
         <li> Not using your license now?</li>
         <li> Taking a break, moving, or retiring?</li></p>
    </div>
    
    <div className="step-connector-home">
      <svg className="step-icon-home" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </div>
    
    <div className="step-home">
      <div className="step-number-home">2</div>
      <h3>Active License, No MLS</h3>
      <p><li>Earn without the fees</li>
      <li>Use standard forms</li>
      <li>Sell new homes</li>
      <li>Refer nationwide</li>
      <li>Partner locally</li></p>
    </div>
    
    <div className="step-connector-home">
      <svg className="step-icon-home" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </div>
    
    <div className="step-home">
      <div className="step-number-home">3</div>
      <h3>Modern Digital Brokerage</h3>
      <p><li>Seamless paperwork with DocuSign</li>
      <li>Fast payments </li></p>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;