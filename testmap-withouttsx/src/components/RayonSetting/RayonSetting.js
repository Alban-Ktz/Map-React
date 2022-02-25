import React, { Component } from "react";
import "./RayonSetting.css";

export default class RayonSetting extends Component {
  render() {
    return (
      <div className="RayonSetting">
          <div className="RayonText">Choisir un rayon de vibration</div>
          <div>
            <select name="radius" id="radius-select">
              <option value="10">10 mètres</option>
              <option value="20">20 mètres</option>
              <option value="30">30 mètres</option>
              <option value="40">40 mètres</option>
              <option value="50">50 mètres</option>
              <option value="60">60 mètres</option>
              <option value="70">70 mètres</option>
            </select>
          </div>
      </div>
    );
  }
}
