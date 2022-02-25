import "./SettingsPage.css";
import GoToMapBtn from "../../components/GoToMapBtn/GoToMapBtn";
import VibrationSetting from "../../components/VibrationSetting/VibrationSetting";
import RayonSetting from "../../components/RayonSetting/RayonSetting";
import Darkmod from "../../components/Darkmod/Darkmod";


function SettingsPage() {
  return (
    <>
      <GoToMapBtn />
      <div className="settingsPage">

        <h1>Settings</h1>

        <VibrationSetting />
        <RayonSetting />
        <Darkmod />

      </div>
    </>
  );
}

export default SettingsPage;