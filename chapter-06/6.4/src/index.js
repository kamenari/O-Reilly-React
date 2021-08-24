import React from 'react';
import ColorProvider from "./ColorProvider";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider.Provider>
      <App />
    </ColorProvider.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
