import React from "react";
import "./Marqueur.css";
import {Marker, Popup } from "react-leaflet";
import touristique from "../../images/touristique.png";
import gare from "../../images/transport.png";
import bar from "../../images/bar.png";
import restaurant from "../../images/restaurant.png";
import L from "leaflet";


function Marqueur(props) {
  function checkPhone() {
    if (props.tel.length > 0) {
      return props.tel;
    } else {
      return "";
    }
  }

  function checkAdresse() {
    if (props.adress.length > 0) {
      return props.adress;
    } else {
      return "";
    }
  }

  function changeIcon() {
    if(props.type === "transport") {
      const transport = new L.icon({
        iconUrl: gare,
        iconSize: [30, 41],
        iconAnchor: [13, 0],
      });
      return transport;
    } else if(props.type === "touristique"){
      const touriste = new L.icon({
        iconUrl: touristique,
        iconSize: [30, 41],
        iconAnchor: [13, 0],
      });
      return touriste;
    } else if(props.type === "bar"){
      const restobar = new L.icon({
        iconUrl: touristique,
        iconSize: [30, 41],
        iconAnchor: [13, 0],
      });
      return restobar;
    } else if(props.type === "resto"){
      const resto = new L.icon({
        iconUrl: restaurant,
        iconSize: [30, 41],
        iconAnchor: [13, 0],
      });
      return resto;
    }
  }

  return (
    <Marker
      className={"marqueur" + props.type_lieux}
      key={props.key}
      position={props.position}
      icon={changeIcon()}
    >
      <Popup>
        <img class="image-lieux" src={props.image} alt="PAS IMAGE" />
        <h2>{props.nom}</h2>
        <p>{props.des}</p>
        <p>{checkPhone()}</p>
        <p>{checkAdresse()}</p>
      </Popup>
    </Marker>
  );
}

export default Marqueur;
