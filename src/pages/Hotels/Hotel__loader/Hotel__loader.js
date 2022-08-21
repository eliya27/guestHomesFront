import React from "react";
import "./Hotel__loader.css";
const Hotel__loader = () => {
  return (
    <div className="loader__wrapper">
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Hotel__loader;
