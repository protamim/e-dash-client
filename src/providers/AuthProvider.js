"use client";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";

// Creating content
export const AuthContext = createContext(null);

// Content Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Oy4nrdHF88sDsfygdCuQFKGbDI_APlQ",
  authDomain: "phone-number-auth-b747c.firebaseapp.com",
  projectId: "phone-number-auth-b747c",
  storageBucket: "phone-number-auth-b747c.appspot.com",
  messagingSenderId: "290903840070",
  appId: "1:290903840070:web:5f72076b1bfedd455d0147"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  // Manage users
  useEffect(() => {
    const unRegister = onAuthStateChanged(firebase.auth(), (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unRegister();
    };
  }, []);

  // Firebase UI
  useEffect(() => {
    // Initialize the FirebaseUI Widget using Firebase.
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());

    ui.start(".phone-auth-container", {
      signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
      signInSuccessUrl: 'https://e-dash-client.vercel.app/'
    });
  }, []);

  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
