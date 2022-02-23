import React from "react";
import "./Marqueur.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function Marqueur(props) {
  return (
    <Marker className="marqueur" position={props.position}>
      <Popup>
        <h2>{props.nom}</h2>
        <p>{props.des}</p>
      </Popup>
    </Marker>
  );
}

export default Marqueur;