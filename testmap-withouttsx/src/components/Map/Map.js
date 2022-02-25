import React from "react";
import "./Map.css";
import { MapContainer, TileLayer } from "react-leaflet";
import Marqueur from "../Marqueur/Marqueur";
import UserMarqueur from "../UserMarqueur/UserMarqueur";
import datalieux from "./data/dataLieux.json";

class Map extends React.Component {
  render() {
    const position = [49.12038112160482, 6.1637997];
    const wantTour = true;
    const wantRest = false;
    return (
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
        datalieux.map( lieux => {

          if (wantTour === false && lieux.type_lieux === 'touristique') {
            return <></>
          
            }else if (wantRest === false && lieux.type_lieux === 'transport') {
              return <></>
              
            }else{
              return  (<Marqueur
                type={lieux.type_lieux}
                key={lieux.id}
                position={[lieux.longitude, lieux.latitude]}
                nom={lieux.nom_lieux}
                des={lieux.description}
                tel={lieux.numero_telephone}
                adress={lieux.adresse}
                image={lieux.image}
                />)
            }
              
            
          }
        )
         
      }
     </MapContainer>
    )          
  }
}

export default Map;
