import "./App.css";
import { Routes, Route } from "react-router-dom";

import MapPage from "../MapPage";
import SuccessPage from "../SuccessPage";
import ProfilePage from "../ProfilePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/SuccessPage" element={<SuccessPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
