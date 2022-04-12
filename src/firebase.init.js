// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7K_Ym6xDwIIHYCBzZnjyf5pIdg1MJmko",
    authDomain: "ema-jhon-simple-7766d.firebaseapp.com",
    projectId: "ema-jhon-simple-7766d",
    storageBucket: "ema-jhon-simple-7766d.appspot.com",
    messagingSenderId: "1044761904067",
    appId: "1:1044761904067:web:c2adbbb636edfe5d0c7376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;