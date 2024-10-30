// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-72002.firebaseapp.com",
  projectId: "real-estate-72002",
  storageBucket: "real-estate-72002.appspot.com",
  messagingSenderId: "145658602572",
  appId: "1:145658602572:web:8d4a8725e22983c67800e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);