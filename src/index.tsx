import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
// import { Auth0Provider } from "@auth0/auth0-react";

// https://mockend.com/davidleiva/escollim-les-franqueses/post


ReactDOM.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="escollim.eu.auth0.com"
      clientId="BPcLyIeVngxZx0LVRRuOD9NYABGNf24E"
      redirectUri={window.location.origin}
    > */}
      <App />
    {/* </Auth0Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
