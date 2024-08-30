import { initializeApp, getApps,getApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDXDxfzAWTmTYsHhvnKJIgNZXbgH8C02Vg",
  authDomain: "ssiihh-da600.firebaseapp.com",
  projectId: "ssiihh-da600",
  storageBucket: "ssiihh-da600.appspot.com",
  messagingSenderId: "782854565829",
  appId: "1:782854565829:web:9df972e9b87217fb5765ac"
};

let auth;

if (getApps().length === 0) {
  console.log("Initializing Firebase...");

  console.log("Apps available:", getApps());
  const app = initializeApp(firebaseConfig);
  console.log("Initialized app:", app);
  
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
  console.log("Firebase initialized:", app);
} else {
  auth = getAuth();
  console.log("Using existing Firebase app.");
}

export { auth, createUserWithEmailAndPassword };
