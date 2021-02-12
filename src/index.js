import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // Not running in strict mode to avoid deprecated 
  // error caused by react-bootstrap navbar.collapse
  // <React.StrictMode>
  <React.Fragment>
    <App />
  </React.Fragment>,
  // </React.StrictMode>,
  document.getElementById('root')
);

