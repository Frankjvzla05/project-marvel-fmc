import React from "react";
import load from "../../assets/img/Dual-Ring.gif";

const Loader = () => (
  <div className="loader">
    <img className="loader-img" src={load} alt="loading" />
    <span className="loader-text">Loading...</span>
  </div>
);

export default Loader;
