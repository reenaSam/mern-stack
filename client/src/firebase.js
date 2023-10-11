/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-86f6f.firebaseapp.com",
  projectId: "mern-estate-86f6f",
  storageBucket: "mern-estate-86f6f.appspot.com",
  messagingSenderId: "255922397602",
  appId: "1:255922397602:web:e43dd0d2ca506fd876d2fb",
  measurementId: "G-KJH18GGV13"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);