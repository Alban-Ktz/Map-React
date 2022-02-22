import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App/App';
import registerServiceWorker from './registerServiceWorker';

import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
