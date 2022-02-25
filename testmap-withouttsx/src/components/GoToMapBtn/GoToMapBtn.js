import React, { Component } from "react";
import "./GoToMapBtn.css";
import backIcon from "./backIcon.svg";

import { Link } from "react-router-dom";
export default class GoToMapBtn extends Component {
  render() {
    return (
      <Link to="/MapPage">
        <btn>
          <img src={backIcon} alt="" />
        </btn>
      </Link>
    );
  }
}
