import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ConnectionState } from './ConnectionState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 class="title">Random Dog Image Generator</h1>
    <ConnectionState />
    <p class="description">Using public databases to make API calls</p>
  </React.StrictMode>
);