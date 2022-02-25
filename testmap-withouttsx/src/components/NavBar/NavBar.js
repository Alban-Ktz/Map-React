import React, { Component } from 'react'
import "./NavBar.css";
import {Link} from "react-router-dom"

import mapIcon from "./mapIcon.svg";
import profileIcon from "./profileIcon.svg";
import trophyIcon from "./trophyIcon.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
          <ul>
              <Link to="/MapPage"><li><img className = "navIcon" id ="navIconMap"src={mapIcon} alt=""/></li></Link>
              <Link to="/ProfilePage"><li><img className = "navIcon" src={profileIcon} alt=""/></li></Link>
              <Link to="/SuccessPage"><li><img className = "navIcon" src={trophyIcon} alt=""/></li></Link>
          </ul>
      </div>
    )
  }
}
