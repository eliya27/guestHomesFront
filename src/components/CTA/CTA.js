import React from "react";
import "./CTA.css";
const CTA = () => {
  return (
    <div className="CTA section__padding">
      <h1>Save Time, save money!</h1>
      <p>Sign Up and we'll send the best deals to you</p>
      <div className="CTA__input">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default CTA;
