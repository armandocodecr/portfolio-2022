import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <NextUIProvider theme={darkTheme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </NextUIProvider>
  </Router>
);

reportWebVitals();
