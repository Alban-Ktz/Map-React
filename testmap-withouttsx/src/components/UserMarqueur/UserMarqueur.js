import "./UserMarqueur.css";
import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";

function UserMarqueur() {
  const [userLat, setUserLat] = useState(false);
  const [userLong, setUserLong] = useState(false);

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
    <Marker position={[userLat, userLong]}>
      <Popup>
        You are here. <br />
      </Popup>
    </Marker>
  );
}

export default UserMarqueur;
