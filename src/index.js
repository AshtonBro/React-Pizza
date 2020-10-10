//? React app
import React from 'react';
import ReactDOM from 'react-dom';

//? Import SCSS
import './scss/app.scss';

//? Import JS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
