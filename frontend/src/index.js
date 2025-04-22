import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Teste from './components/App.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Teste />
  </React.StrictMode>
);

reportWebVitals();
