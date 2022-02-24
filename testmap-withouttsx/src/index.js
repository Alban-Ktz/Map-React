import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import registerServiceWorker from "./registerServiceWorker";
import LoginPage from "./pages/LoginPage/LoginPage";

import { BrowserRouter } from "react-router-dom";

let startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

if (!window.cordova) {
  startApp();
} else {
  document.addEventListener("deviceready", startApp, false);
}

registerServiceWorker();
