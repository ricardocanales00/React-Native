// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKs7FDM-Mt9EGs36DCi6ZpARk8CVzznI",
  authDomain: "wallet-ca3b2.firebaseapp.com",
  projectId: "wallet-ca3b2",
  storageBucket: "wallet-ca3b2.appspot.com",
  messagingSenderId: "544215546024",
  appId: "1:544215546024:web:0238540ac01b6e4460ea9d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);