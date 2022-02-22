import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Marqueur from "../Marqueur/Marqueur";

class Map extends React.Component {
  render() {

    const position = [49.12038112160482, 6.1637997];
    const cathedrale = [49.1202, 6.1757];

    return (
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marqueur position={cathedrale} nom={'Cathédrale'} des = {'salut'}/>
        
      </MapContainer>
    );
  }
}

export default Map;
