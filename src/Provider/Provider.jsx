import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  // user Register method
  const userRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User Login method
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userLogout = () =>{
    return signOut(auth)
  }

  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    userRegister,
    userLogin,
    user,
    userLogout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
