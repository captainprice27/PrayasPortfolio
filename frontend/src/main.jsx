/**
 * =====================================================
 * MAIN ENTRY POINT
 * Renders the React app to the DOM
 * =====================================================
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
