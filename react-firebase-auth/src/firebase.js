// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-BD9xleuDW5pJzRSNgeEgB6wyhKLrFVM",
  authDomain: "user-auth-865ba.firebaseapp.com",
  projectId: "user-auth-865ba",
  storageBucket: "user-auth-865ba.appspot.com",
  messagingSenderId: "996830112507",
  appId: "1:996830112507:web:305029fa1e62c1ba285e5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);