import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import reportWebVitals from './reportWebVitals';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: "AIzaSyDvDQTc3HngEe_Zf2HiMapJBcPZLMjkGns",
  authDomain: "gameplay-log.firebaseapp.com",
  projectId: "gameplay-log",
  storageBucket: "gameplay-log.appspot.com",
  messagingSenderId: "934546283683",
  appId: "1:934546283683:web:5f225438e8874bde7a3316",
  measurementId: "G-56FHVHT12Q"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
