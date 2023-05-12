// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS19mt0ryRG7uE5kjNwp8bpu2Kas2yZ18",
  authDomain: "task-manager-7b264.firebaseapp.com",
  projectId: "task-manager-7b264",
  storageBucket: "task-manager-7b264.appspot.com",
  messagingSenderId: "214996579290",
  appId: "1:214996579290:web:23c8a2e71f31280883c6e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);