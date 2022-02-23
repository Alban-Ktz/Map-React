import React from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Marqueur from "../Marqueur/Marqueur";
import UserMarqueur from "../UserMarqueur/UserMarqueur";

class Map extends React.Component {
  render() {
    const position = [49.12038112160482, 6.1637997];
    const cathedrale = [49.1202, 6.1757];
    const arsenal = [49.11457, 6.1708];
    const stlouis = [49.11661, 6.17893];
    const stjack = [49.11859, 6.17593];
    const user = [49.11996, 6.16326];

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
        <Marqueur
          position={cathedrale}
          nom={"La cathédrale Saint-Étienne de Metz"}
          des={
            "Dont les premières édifications datent du 13ème siècle, est l’église-mère du diocèse et l’un des monuments de la ville les plus visités. La luminosité toute particulière, qui rend cet édifice si singulier, sera à l’origine de son surnom de “Lanterne du Bon Dieu“."
          }
        />
        <Marqueur position={user} nom={"Vous êtes ici !"} des={""} />
        <Marqueur
          position={arsenal}
          nom={"L'Arsenal Ney"}
          des={
            "Bâtiment militaire destiné au stockage des armes et des munitions de la garnison messine. Réhabilité et réaménagé par Ricardo Bofill<br>Adresse : 3 AV Ney, 57000 Metz"
          }
        />
        <Marqueur
          position={position}
          nom={"IUT de Metz"}
          des={
            "Insistut Universitaire Technologique de Metz ! On y retrouve notamment le DUT Informatique."
          }
        />
        <Marqueur
          position={stlouis}
          nom={"Place St Jacques"}
          des={"Une des nombreuses places très connus de Metz !"}
        />
        <Marqueur
          position={stjack}
          nom={"Place St Louis"}
          des={"Une des nombreuses places très connus de Metz !"}
        />
      </MapContainer>
    );
  }
}

export default Map;
