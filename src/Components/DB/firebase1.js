// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaPyqhsDsIe4Psba04KMUW9mWaDN5UYsk",
  authDomain: "scholar-fa3ab.firebaseapp.com",
  projectId: "scholar-fa3ab",
  storageBucket: "scholar-fa3ab.appspot.com",
  messagingSenderId: "970742207806",
  appId: "1:970742207806:web:ca50e684bbb15f4ee0886f",
  measurementId: "G-MS08377K1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
