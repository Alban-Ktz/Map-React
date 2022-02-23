import React from "react";
import "./Marqueur.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function Marqueur(props) {
  function checkPhone() {
    if (props.tel.length > 0) {
      return props.tel;
    } else {
      return "";
    }
  }

  return (
    <Marker
      className={"marqueur" + props.type_lieux}
      key={props.key}
      position={props.position}
    >
      <Popup>
        <h2>{props.nom}</h2>
        <p>{props.des}</p>
        <p>{checkPhone()}</p>
      </Popup>
    </Marker>
  );
}

export default Marqueur;
