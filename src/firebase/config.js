// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr3HZXiZOK-YKOKWXIT85tWNB5CTaqlYU",
  authDomain: "react-cursos-23d18.firebaseapp.com",
  projectId: "react-cursos-23d18",
  storageBucket: "react-cursos-23d18.appspot.com",
  messagingSenderId: "821233984280",
  appId: "1:821233984280:web:4cafa539840c4a3edfb46d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )