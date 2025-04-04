// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3miJ_oc5NNYd6Bzb2245hbismS_f2MHM",
  authDomain: "project-ai-a4ec5.firebaseapp.com",
  projectId: "project-ai-a4ec5",
  storageBucket: "project-ai-a4ec5.firebasestorage.app",
  messagingSenderId: "667312958072",
  appId: "1:667312958072:web:45964bf1be9565762a9b8d",
  measurementId: "G-5PC38J14H8"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig): getApp();
const auth= getAuth(app);
const db = getFirestore(app);