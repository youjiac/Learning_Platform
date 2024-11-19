// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAN7LqyYfZbUpQoRoJe047oK5_Kt4n61qI",
  authDomain: "personalized-learning-pl-bdbe4.firebaseapp.com",
  databaseURL: "https://personalized-learning-pl-bdbe4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "personalized-learning-pl-bdbe4",
  storageBucket: "personalized-learning-pl-bdbe4.firebasestorage.app",
  messagingSenderId: "636819204634",
  appId: "1:636819204634:web:02c2aad1ddc5cc1805ffa3",
  measurementId: "G-7ZT1R5LWRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
