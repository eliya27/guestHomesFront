import React from "react";
import "./PropertyLoader.css";
const PropertyLoader = () => {
  return (
    <div className="loader__wrapper">
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PropertyLoader;
