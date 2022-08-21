import React from "react";
import { Link } from "react-router-dom";
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
          Back to <Link to="/">Main page</Link>
        </p>
      </div>
    </div>
  );
};

export default Error;
