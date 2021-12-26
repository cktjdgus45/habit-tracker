import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactHook from './components/reactHook.jsx';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <ReactHook />
  </React.StrictMode>,
  document.getElementById('root')
);

