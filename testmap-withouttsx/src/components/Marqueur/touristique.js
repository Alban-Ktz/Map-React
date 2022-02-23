import L from "leaflet";
import touristiqueImage from "../../images/touristique.png";

const touristique = new L.icon({
  iconUrl: touristiqueImage,
  iconSize: [25, 41],
  iconAnchor: [13, 0],
});

export { touristique };
