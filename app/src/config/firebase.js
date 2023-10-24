import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
require('dotenv').config(); // Load environment variables from .env

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

// gives us an auth instance
const auth = getAuth(app);

const firestore = getFirestore(app);

// in order to use this auth instance elsewhere
export { auth, firestore };