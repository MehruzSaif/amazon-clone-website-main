// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_VhiOZe3BKr8ZUdGMmc65Oo0_LIeSJr8",
    authDomain: "ema-john-simple-4d66a.firebaseapp.com",
    projectId: "ema-john-simple-4d66a",
    storageBucket: "ema-john-simple-4d66a.appspot.com",
    messagingSenderId: "1007566700009",
    appId: "1:1007566700009:web:fc8e9e3e973f3ec9735f78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;