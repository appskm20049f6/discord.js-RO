// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";
import dotenv from "dotenv";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: "https://discord-robot-cd647-default-rtdb.firebaseio.com",
  projectId: process.env.FIREBASE_projectId,
  storageBucket: process.env.FIREBASE_storageBucket,
  messagingSenderId: process.env.FIREBASE_messagingSenderId,
  appId: process.env.FIREBASE_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAHncXW6zBfkF-qbVuSz_Uu3As-04PcsB0",
//   authDomain: "discord-robot-cd647.firebaseapp.com",
//   databaseURL: "https://discord-robot-cd647-default-rtdb.firebaseio.com",
//   projectId: "discord-robot-cd647",
//   storageBucket: "discord-robot-cd647.appspot.com",
//   messagingSenderId: "222413591959",
//   appId: "1:222413591959:web:4e7e978b54e063775520d2",
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseDB = getDatabase();
