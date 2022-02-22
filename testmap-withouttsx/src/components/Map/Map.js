import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

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

        <Marker position={position}>
          <Popup>
            <h1>IUT de Metz</h1>
            <p>Institut technologique universitaire de Metz</p>
          </Popup>
        </Marker>
        <Marker position={cathedrale}>
          <Popup>
            <h1>Cathédrale de Metz</h1>
            <p>La cathédrale</p>
          </Popup>
        </Marker>
      </MapContainer>
      

    );
  }
}

export default Map;
