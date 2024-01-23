import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB9UTnG0_7jJx6fsVI5XeRs8eFB08SvBdQ",
  authDomain: "jstore-coder.firebaseapp.com",
  projectId: "jstore-coder",
  storageBucket: "jstore-coder.appspot.com",
  messagingSenderId: "1020637540397",
  appId: "1:1020637540397:web:0a963c9e0ec881b2ea08a4"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
