// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  connectFirestoreEmulator,
  addDoc,
  collection,
} from 'firebase/firestore/lite';
import {
  getAuth,
  connectAuthEmulator,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfvqS6UFdRbU2J-ntfif79JKbVH3zWa-w",
  authDomain: "fridge--logger.firebaseapp.com",
  projectId: "fridge--logger",
  storageBucket: "fridge--logger.firebasestorage.app",
  messagingSenderId: "880590735176",
  appId: "1:880590735176:web:a759790372e1d7c90ed57d",
  measurementId: "G-S91NKJN1BD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);