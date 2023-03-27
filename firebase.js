// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// TODO: 将变量替换成环境变量
const firebaseConfig = {
  apiKey: "AIzaSyDlOJnNAoGGTmeokLYk1qNobb1Cj2bKBIc",
  authDomain: "cryptobase-d4a80.firebaseapp.com",
  projectId: "cryptobase-d4a80",
  storageBucket: "cryptobase-d4a80.appspot.com",
  messagingSenderId: "731310315196",
  appId: "1:731310315196:web:8b0783f6547e3de78da2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);
