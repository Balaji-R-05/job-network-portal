// src/firebase/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

// Replace this config with your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDuGgYr5N5cxDFI3WcHVYjVokhnC2olGnk",
  authDomain: "job-networking-portal.firebaseapp.com",
  projectId: "job-networking-portal",
  storageBucket: "job-networking-portal.firebasestorage.app",
  messagingSenderId: "49732229191",
  appId: "1:49732229191:web:561accfa70806d04d4b962",
  measurementId: "G-PMN7YJ2P6J"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth and Firestore instances
export const auth = getAuth(app);
export const db = getDatabase(app);
export const rtdb = getDatabase(app);