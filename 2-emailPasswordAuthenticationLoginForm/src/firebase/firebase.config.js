// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfPFlP-ta1NNM_KA-xLI_2-YBOYev8cY",
  authDomain: "email-password-auth-logi-dd92c.firebaseapp.com",
  projectId: "email-password-auth-logi-dd92c",
  storageBucket: "email-password-auth-logi-dd92c.firebasestorage.app",
  messagingSenderId: "73272110263",
  appId: "1:73272110263:web:c2c626214d0aa6c5bdf132"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);