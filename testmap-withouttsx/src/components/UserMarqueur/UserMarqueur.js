import React from "react";
import "./UserMarqueur.css";
import { Marker } from "react-leaflet";

function UserMarqueur() {
  const watcher = navigator.geolocation.watchPosition(displayLocationInfo);

  // setTimeout(() => {
  //   navigator.geolocation.clearWatch(watcher);
  // }, 35000);

  function displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    const pos = [lng, lat];
    return pos;
  }

  const userPosition = displayLocationInfo();
  console.log(userPosition);

  //return <Marker position={userPosition}></Marker>;
}

export default UserMarqueur;
