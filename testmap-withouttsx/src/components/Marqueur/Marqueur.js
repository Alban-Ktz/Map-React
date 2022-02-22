import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function Marqueur(props) {
  return (
    <Marker position={props.position}>
      <Popup>
        <h1>{props.nom}</h1>
        <p>{props.des}</p>
      </Popup>
    </Marker>
  );
}

export default Marqueur;