import { Link } from "react-router-dom";
import "./SettingsPage.css";
import GoToMapBtn from "../../components/GoToMapBtn/GoToMapBtn";
import VibrationSetting from "../../components/VibrationSetting/VibrationSetting";


function SettingsPage() {
  return (
    <div id="settingsPage">
      <GoToMapBtn />

      <VibrationSetting />
      <ul className="white">
        <li>
          <select name="radius" id="radius-select">
            <option value="10">10 mètres</option>
            <option value="20">20 mètres</option>
            <option value="30">30 mètres</option>
            <option value="40">40 mètres</option>
            <option value="50">50 mètres</option>
            <option value="60">60 mètres</option>
            <option value="70">70 mètres</option>
          </select>
        </li>
        <li>Choisir un rayon de vibration</li>
      </ul>
    </div>
  );
}

export default SettingsPage;