// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use// https://firebase.google.com/docs/web/setup#available-libraries// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtvL4q-2Oh-vzXPQPhjTuhRsve5YtYh2c",
    authDomain: "starterproject-2e89c.firebaseapp.com",
    projectId: "starterproject-2e89c",
    storageBucket: "starterproject-2e89c.firebasestorage.app",
    messagingSenderId: "372865072498",
    appId: "1:372865072498:web:085dbffd56d4e2ceacf1eb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };

