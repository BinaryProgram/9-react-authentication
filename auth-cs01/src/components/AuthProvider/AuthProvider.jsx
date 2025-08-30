import React, { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// 1. export and create the context
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // signin uses
  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // signin with google
  const googleSignin = () => {
    return signInWithPopup(auth,provider);
  }
  // signout user
  const signOutUser = () => {
    return signOut(auth);
  }

  // observer of current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("currently observing user -", currentUser);
        setUser(currentUser);
        // ...
      } else {
        console.log('No logged user to observe')
        setUser(null)
      }
    });
    // to prevent memory leak
    return () => unsubscribe();
  }, []);

  // we pass AuthContext.Provider value as object
  const authInfo = { createUser, signinUser, user, setUser,signOutUser,googleSignin };
  return (
    // 2. wrap the children components with context provider (children is the entire route components)
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
