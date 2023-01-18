// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "e-commerce-application-3dbe7.firebaseapp.com",
  projectId: "e-commerce-application-3dbe7",
  storageBucket: "e-commerce-application-3dbe7.appspot.com",
  messagingSenderId: "645053244751",
  appId: "1:645053244751:web:c72c7af5e8db0a10b1913a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
