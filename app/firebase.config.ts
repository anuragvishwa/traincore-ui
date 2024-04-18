// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiUUxNwVh4HDqaeYOn9TCpgRBiZkAarg8",
  authDomain: "traincore-4900e.firebaseapp.com",
  projectId: "traincore-4900e",
  storageBucket: "traincore-4900e.appspot.com",
  messagingSenderId: "478074556260",
  appId: "1:478074556260:web:f1ce0a26296472ff657471",
  measurementId: "G-0E24V22J3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
