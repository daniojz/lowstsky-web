// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3mQG7C45bxD6W3Zl_mUlj8cQcHOZXISU",
  authDomain: "lowstsky-web.firebaseapp.com",
  projectId: "lowstsky-web",
  storageBucket: "lowstsky-web.appspot.com",
  messagingSenderId: "211432009730",
  appId: "1:211432009730:web:bb1d7f9ebaf9bc2e54771b",
  measurementId: "G-S0KPX27PP2"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);
export const db = getFirestore(fb);