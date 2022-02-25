import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <img src={logo} alt="" className="loadingLogo" />
    </div>
  );
}

export default LoadingScreen;
