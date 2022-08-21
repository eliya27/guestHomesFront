import React from "react";

import "./Error.css";
const Error = () => {
  return (
    <div className="error">
      <div className="error__container">
        <h1>Error</h1>
        <h3>|</h3>
        <p>User not found/Internal error</p>
      </div>
      <div className="error__back">
        <p>
          Back to <a href="/login">Login page</a>
        </p>
      </div>
    </div>
  );
};

export default Error;
