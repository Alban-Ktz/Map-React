import React, { Component } from 'react'
import "./NavBar.css";
import mapIcon from "./mapIcon.svg";
import profileIcon from "./profileIcon.svg";
import trophyIcon from "./trophyIcon.svg";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navBar">
          <ul>
              <li><img className = "navIcon" src={mapIcon} alt=""/></li>
              <li><img className = "navIcon" src={profileIcon} alt=""/></li>
              <li><img className = "navIcon" src={trophyIcon} alt=""/></li>
          </ul>
      </div>
    )
  }
}
