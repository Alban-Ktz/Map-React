import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {

  const position = [49.12038112160482, 6.1637997]
  const cathedrale = [49.1202, 6.1757]
  const placeRep = [49.115, 6.17262]
  const placeStJacques =[49.11646, 6.17895]
  const TempleNeuf = [49.12066, 6.17198]
  const Arsenal = [49.11455, 6.17082]
  
  let te = "IUT de Metz";
  return (
    <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        <h1>{te}</h1>
        <p>Institut technologique universitaire de Metz</p>
      </Popup>
    </Marker>
    <Marker position={cathedrale}>
      <Popup>
        <h1>Cathédrale de Metz</h1>
        <p></p>
      </Popup>
    </Marker>
    <Marker position={placeRep}>
      <Popup>
        <h1>Place de la République</h1>
        <p></p>
      </Popup>
    </Marker>
    <Marker position={placeStJacques}>
      <Popup>
        <h1>Place Saint Jacques</h1>
        <p>....</p>
      </Popup>
    </Marker>
    <Marker position={TempleNeuf}>
      <Popup>
        <h1>Temple Neuf</h1>
        <p>....</p>
      </Popup>
    </Marker>
    <Marker position={Arsenal}>
      <Popup>
        <h1>Arsenal</h1>
        <p>....</p>
      </Popup>
    </Marker>
  </MapContainer>
  );
}

export default App;
