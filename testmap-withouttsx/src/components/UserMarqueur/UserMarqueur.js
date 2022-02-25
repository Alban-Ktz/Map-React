import "./UserMarqueur.css";
import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";

function UserMarqueur() {
  const [userLat, setUserLat] = useState(false);
  const [userLong, setUserLong] = useState(false);
  const userIcon = new L.icon({
    iconUrl: "https://www.shareicon.net/data/2017/05/22/886133_map_512x512.png",
    iconSize: [60, 75],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLat(position.coords.latitude);
        setUserLong(position.coords.longitude);
      });
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Marker position={[userLat, userLong]} icon={userIcon}>
      <Popup>
        You are here
        <br />
      </Popup>
    </Marker>
  );
}

export default UserMarqueur;
