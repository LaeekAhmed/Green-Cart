import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ⚠️ div id="root" being accessed from index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* ⚠️ func App imported and used from app.js*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
