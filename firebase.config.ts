import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT51B8mvHHwp4LvEIm2RTiPDqJKP_ck9Q",
  authDomain: "greenway-61911.firebaseapp.com",
  projectId: "greenway-61911",
  storageBucket: "greenway-61911.firebasestorage.app",
  messagingSenderId: "537247733967",
  appId: "1:537247733967:web:03423f49529de0afe43fba"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
