import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App/App";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter } from "react-router-dom";

let startApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
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
