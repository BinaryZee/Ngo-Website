// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiEz045JCy7PXu1ir6-1LZE30nSA8AM4o",
  authDomain: "devshouse-9ca80.firebaseapp.com",
  projectId: "devshouse-9ca80",
  storageBucket: "devshouse-9ca80.appspot.com",
  messagingSenderId: "592209897809",
  appId: "1:592209897809:web:1b4692a6b5470aa562cb70",
  measurementId: "G-CHL6HE7RVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)