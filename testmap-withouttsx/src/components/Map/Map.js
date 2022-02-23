import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Marqueur from "../Marqueur/Marqueur";
import datalieux from "./data/dataLieux.json";
import image from "./data/jungle.jpg";

class Map extends React.Component {
  render() {
    const position = [49.12038112160482, 6.1637997];

    return (
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {datalieux.map((lieux) => (
          <Marqueur key={lieux.id} 
          position={[lieux.longitude, lieux.latitude]}
          nom={lieux.nom_lieux}
          des={lieux.description}
          tel={lieux.numero_telephone}
          adress={lieux.adresse}
          image={lieux.image}
          />
        ))}

      </MapContainer>
    );
  }
}

export default Map;
