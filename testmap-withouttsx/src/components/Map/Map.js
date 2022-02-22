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
<<<<<<< HEAD
        <Marqueur position={cathedrale} nom={'Cathédrale'} des={'salut'} />

=======
        
        <Marqueur position={cathedrale} nom={'Cathédrale'} des = {'salut'}/>
        
>>>>>>> 42fe43defc5e0e3a508a5f7a8feec35493275864
      </MapContainer>
    );
  }
}

export default Map;
