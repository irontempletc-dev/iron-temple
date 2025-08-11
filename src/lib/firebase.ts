// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  "projectId": "iron-temple-training-hub",
  "appId": "1:385114284013:web:5283943cb4926ff8d6d1e4",
  "storageBucket": "iron-temple-training-hub.firebasestorage.app",
  "apiKey": "AIzaSyCmMY0v9N-sAj0mdTbtJ7LGW_thgDTQNog",
  "authDomain": "iron-temple-training-hub.firebaseapp.com",
  "messagingSenderId": "385114284013"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
