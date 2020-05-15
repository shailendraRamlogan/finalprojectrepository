import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './components/App';
import "./app.css";
render((
  <div id="app">
  <HashRouter>
    <App />
  </HashRouter>
  </div>
), document.getElementById('root'));