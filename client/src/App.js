import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Partnership from "./pages/Partnership";
import Activate from "./pages/applicants/Activate";
import Transfer from "./pages/applicants/Transfer";
import NonMLS from "./pages/applicants/NonMLS";

import JoinNow from "./pages/join/JoinNow";
import NewLicenseForm from "./pages/join/NewLicenseForm";
import TransferForm from "./pages/join/TransferForm";
import ContactAcknowledgement from "./pages/join/ContactAcknowledgement";


import ROI from "./pages/nonmls/ROI";
import FreeBroker from "./pages/nonmls/FreeBroker";
import ReferralFees from "./pages/nonmls/ReferralFees";
import BrokerageFees from "./pages/nonmls/BrokerageFees";
import CommissionPayouts from "./pages/nonmls/CommissionPayouts";

import Referral from "./pages/members/Referral";
import LicenseStatus from "./pages/members/LicenseStatus";
import NVBusinessLicense from "./pages/members/NVBusinessLicense";
import TransferOut from "./pages/members/TransferOut";
import RequestForm from "./pages/members/RequestForm";
import Videos from "./pages/members/Videos";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/applicants/activate" element={<Activate />} />
            <Route path="/applicants/transfer" element={<Transfer />} />
            <Route path="/applicants/non-mls" element={<NonMLS />} />

            <Route path="/join" element={<JoinNow />} />
            <Route path="/join/new-license" element={<NewLicenseForm />} />
            <Route path="/join/transfer" element={<TransferForm />} />
            <Route path="/contact-acknowledgement" element={<ContactAcknowledgement />} />

            
            <Route path="/non-mls/roi" element={<ROI />} />
            <Route path="/non-mls/free-broker" element={<FreeBroker />} />
            <Route path="/non-mls/referral-fees" element={<ReferralFees />} />
            <Route path="/non-mls/brokerage-fees" element={<BrokerageFees />} />
            <Route path="/non-mls/commission-payouts" element={<CommissionPayouts />} />

            <Route path="/members/referral" element={<Referral />} />
            <Route path="/members/license-status" element={<LicenseStatus />} />
            <Route path="/members/nv-business-license" element={<NVBusinessLicense />} />
            <Route path="/members/transfer-out" element={<TransferOut />} />
            <Route path="/members/request-form" element={<RequestForm />} />
            <Route path="/members/videos" element={<Videos />} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
