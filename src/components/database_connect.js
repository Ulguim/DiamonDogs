// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChEOJ757E3GxNQ_nxqfQWGdhaJrqKNk8U",
  authDomain: "dogs-f0464.firebaseapp.com",
  projectId: "dogs-f0464",
  storageBucket: "dogs-f0464.appspot.com",
  messagingSenderId: "297560718354",
  appId: "1:297560718354:web:e6f06bba94cc5c8f516ccb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
