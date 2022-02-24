import React from "react";
import "./Marqueur.css";
import {Marker, Popup } from "react-leaflet";
import touristiqueImage from "../Map/data/jungle.jpg";
import restaurantImage from "../Map/data/resto.jpeg";
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
      const touristique = new L.icon({
        iconUrl: touristiqueImage,
        iconSize: [25, 41],
        iconAnchor: [13, 0],
      });
      return touristique;
    } else {
      const resto = new L.icon({
        iconUrl: restaurantImage,
        iconSize: [25, 41],
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
