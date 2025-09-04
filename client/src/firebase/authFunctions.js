import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from './firebase';

export const signUp = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
};

export const logIn = async (email , password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

export const logOut = async () => {
    return await signOut(auth);
};

const provider = new GoogleAuthProvider();

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};