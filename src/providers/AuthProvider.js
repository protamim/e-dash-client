"use client";
import auth from "@/config/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

// Creating content
export const AuthContext = createContext(null);

// Content Provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
 
  // Manage users
  useEffect(() => {
    const unRegister = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unRegister();
    };
  }, []);


  const authInfo = { user };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
