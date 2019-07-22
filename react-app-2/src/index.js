import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { init } from './modules/keycloak.js';

// Initialize the Keycloak client
init();
// Render the React application
ReactDOM.render(<App />, document.getElementById('root'));