// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnVkN5r4KUd92oXQsSeVB3sk66WyI7FP4",
    authDomain: "nextjsdumbpractice.firebaseapp.com",
    projectId: "nextjsdumbpractice",
    storageBucket: "nextjsdumbpractice.appspot.com",
    messagingSenderId: "955948003805",
    appId: "1:955948003805:web:14f970d7631dcb4ec00634",
    measurementId: "G-26LK3Y3J7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};