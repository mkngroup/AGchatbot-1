// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDMCJ3mdG1mlmlCw3LAO5XY8_2jV8tWsg",
  authDomain: "agchatbot-5c44b.firebaseapp.com",
  projectId: "agchatbot-5c44b",
  storageBucket: "agchatbot-5c44b.appspot.com",
  messagingSenderId: "201848820415",
  appId: "1:201848820415:web:667cb1de898913a5716c0a",
  measurementId: "G-VK9KCXGPC2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);