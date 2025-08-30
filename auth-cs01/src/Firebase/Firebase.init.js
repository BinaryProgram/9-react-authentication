// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo4Td5w2FHrHM_3jpwCN7qFaRn3vqC1qg",
  authDomain: "auth-session-73638.firebaseapp.com",
  projectId: "auth-session-73638",
  storageBucket: "auth-session-73638.firebasestorage.app",
  messagingSenderId: "83369977993",
  appId: "1:83369977993:web:af2853105b9a10cefd3e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;