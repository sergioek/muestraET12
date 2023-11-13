// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNw5XvqjyWwQWTFedy_HTvMZnbC0rFzQk",
  authDomain: "muestaet12.firebaseapp.com",
  projectId: "muestaet12",
  storageBucket: "muestaet12.appspot.com",
  messagingSenderId: "446591608270",
  appId: "1:446591608270:web:81a05c8fa86781320db79f",
  measurementId: "G-X8CLKNTF7Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore
export const databaseFirestore = getFirestore(app)

