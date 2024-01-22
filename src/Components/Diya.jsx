import React from "react";
import "./diya.css";

export default function Diya() {
  return (
    <div className="container">
      <div className="Shad"></div>
      <div className="diya">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="dots"></div>
      </div>
      <div className="inside">
        <div className="light"></div>
        <div className="flame"></div>
      </div>
    </div>
  );
}
