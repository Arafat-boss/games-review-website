// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr0ew6iCok6cTxvjd52njqSXtM4sMS8cA",
  authDomain: "assignment-game-review.firebaseapp.com",
  projectId: "assignment-game-review",
  storageBucket: "assignment-game-review.firebasestorage.app",
  messagingSenderId: "349480732112",
  appId: "1:349480732112:web:e705e83357c7760f26e5d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
