import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

export { db };
