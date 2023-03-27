import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { auth, db } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";


/**
 * Create a new user
 * @param email
 * @param password
 */
export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        return setDoc(doc(db, "users", email), {
          watchlist: []
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
}

/**
 * Login the user
 * @param email
 * @param password
 */
export const login = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          resolve(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          reject(error);
        });
  })
}

/**
 * Logout the user
 * @returns {Promise<void>}
 */
export const logout = () => {
  return signOut(auth);
}