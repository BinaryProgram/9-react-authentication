// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYErgVuPcM2qW8y8uyMROmVgWxq3uxkqQ",
  authDomain: "auth-context-private-rou-4d105.firebaseapp.com",
  projectId: "auth-context-private-rou-4d105",
  storageBucket: "auth-context-private-rou-4d105.firebasestorage.app",
  messagingSenderId: "742285963320",
  appId: "1:742285963320:web:ec0f32a61a3adaefa136cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;