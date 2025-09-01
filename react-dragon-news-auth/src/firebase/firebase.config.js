// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtQanZsHgHtgkWmBIoXUw-qcJqFTzcJE8",
  authDomain: "react-dragon-news-auth-13e23.firebaseapp.com",
  projectId: "react-dragon-news-auth-13e23",
  storageBucket: "react-dragon-news-auth-13e23.firebasestorage.app",
  messagingSenderId: "258716381870",
  appId: "1:258716381870:web:3c5f2942aca4a7b213b33f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;