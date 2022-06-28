import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  confirmPasswordReset,
  sendPasswordResetEmail,
  signOut,
  deleteUser,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../DB/firebase1";

const logcont = createContext();

export { logcont };

function LogCompo({ children }) {
  const [user, setuser] = useState();
  const [load, setload] = useState(false);

  function signin(email, pass) {
    return createUserWithEmailAndPassword(auth, email, pass);
  }

  function logout() {
    return auth.signOut();
  }

  function login(email, pass) {
    return signInWithEmailAndPassword(auth, email, pass);
  }

  function updatemail(email) {
    return updateEmail(user, email);
  }

  function updatepass(pass) {
    return updatePassword(user, pass);
  }

  function passremail(email) {
    return sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/login",
    });
  }

  const value = {
    login,
    signin,
    updateEmail,
    updatepass,
    user,
    passremail,
    logout,
  };

  useEffect(() => {
    setload(true);
    return auth.onAuthStateChanged((user) => {
      setuser(user);
      if (!user) {
        setuser("no");
      }
      setload(false);
    });
  }, []);

  return (
    <>
      <logcont.Provider value={value}>{!load && children}</logcont.Provider>
    </>
  );
}

export default LogCompo;
