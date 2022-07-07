// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByinTkn3KOLqZ_khGUU1ugRq7LgZEPCiE",
  authDomain: "hackathon-bef00.firebaseapp.com",
  projectId: "hackathon-bef00",
  storageBucket: "hackathon-bef00.appspot.com",
  messagingSenderId: "128881263717",
  appId: "1:128881263717:web:ac9e6adf78c82a2231b28c",
  measurementId: "G-YZ4Y3DJFWH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "app");
// console.log(firebase);
// const app = firebase.app();
const db = getFirestore(app);

export { db };
