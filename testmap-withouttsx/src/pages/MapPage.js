import React, { Component } from 'react';
import BurgerMenu from "../components/BurgerMenu/BurgerMenu";
import Map from "../components/Map/Map";
import NavBar from "../components/NavBar/NavBar";

export default class MapPage extends Component {
  render() {
    return (
      <div className="mapPage">
        <BurgerMenu />
        <NavBar />
        <Map />
      </div>
    )
  }
}
