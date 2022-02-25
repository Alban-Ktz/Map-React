import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

import MapPage from "../MapPage";
import SuccessPage from "../SuccessPage";
import ProfilePage from "../ProfilePage";
import SettingsPage from "../SettingsPage/SettingsPage";
import LoginPage from "../LoginPage/LoginPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/SettingsPage" element={<SettingsPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
