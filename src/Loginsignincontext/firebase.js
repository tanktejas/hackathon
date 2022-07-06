// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWnkv8bHq2QJw8AeGGmifiIiEJP0t70Y",
  authDomain: "temp-7cd58.firebaseapp.com",
  projectId: "temp-7cd58",
  storageBucket: "temp-7cd58.appspot.com",
  messagingSenderId: "559604025037",
  appId: "1:559604025037:web:2e3fe6b7b49401ab790b84",
  measurementId: "G-KKQKL71375",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(firebase);

// const app = firebase.app();
export const auth = getAuth(app);
