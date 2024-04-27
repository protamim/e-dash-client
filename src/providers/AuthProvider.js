"use client";
import auth from "@/config/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// Creating content
export const AuthContext = createContext(null);

// Content Provider
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading]= useState(true);
  const [reload, setReload]= useState(null);

  // register user
const createAccount = (email, password)=> {
  setLoading(true);
return createUserWithEmailAndPassword(auth, email, password);
}

// Update user profile info
const userProfile = (userInfo)=> {
  setLoading(true);
 return updateProfile(auth.currentUser, userInfo)
}

// Sign Out the users
const logOut = ()=> {
  setLoading(true);
  return signOut(auth);
}

// sign in user
const logIn = (email, password)=> {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
}
 
  // Manage users
  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unRegister();
    };
  }, [reload]);


  const authInfo = { user, loading, reload, createAccount, setReload, userProfile, logOut, logIn};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
