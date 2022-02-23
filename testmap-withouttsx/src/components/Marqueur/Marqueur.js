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

  function checkIcon() {
    if (props.type.textContent === "touristique") {
      return "touristique";
    } else {
      return;
    }
  }

  function checkAdresse() {
    if (props.adress.length > 0) {
      return props.adress;
    } else {
      return "";
    }
  }
  return (
    <Marker
      className={"marqueur" + props.type_lieux}
      key={props.key}
      position={props.position}
      //icon={checkIcon()}
    >
      <Popup>
<<<<<<< HEAD
        <img className="marqueurImage" src={props.image} alt="PAS IMAGE"/>
=======
        <img class="image-lieux" src={props.image} alt="PAS IMAGE" />
>>>>>>> 745105eb58a0e4ad3c5e0e8b8097fbc4886d8ad9
        <h2>{props.nom}</h2>
        <p>{props.des}</p>
        <p>{checkPhone()}</p>
        <p>{checkAdresse()}</p>
      </Popup>
    </Marker>
  );
}

export default Marqueur;
