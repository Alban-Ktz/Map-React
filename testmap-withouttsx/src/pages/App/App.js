import "./App.css";
import { Routes, Route } from "react-router-dom";

import MapPage from "../MapPage";
import SuccessPage from "../SuccessPage";
import ProfilePage from "../ProfilePage";
import SettingsPage from "../SettingsPage/SettingsPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/SettingsPage" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
