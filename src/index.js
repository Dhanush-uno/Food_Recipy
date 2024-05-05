import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/index.scss";

// Import createRoot function from react-dom
import { createRoot } from 'react-dom';

// Use createRoot to render your application
createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
