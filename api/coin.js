import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";

/**
 * Add a coin to the watchlist
 * @param coinId - The coin id
 * @param userEmail - The user email
 * @returns {Promise<void>}
 */
export const addBookmark = (coinId, userEmail) => {
  const userRef = doc(db, "users", userEmail);

  return updateDoc(userRef, {
    watchlist: arrayUnion(coinId)
  });
}

export const removeBookmark = (coinId, userEmail) => {
  const userRef = doc(db, "users", userEmail);
  // Atomically remove a region from the "regions" array field.
  return updateDoc(userRef, {
    watchlist: arrayRemove(coinId)
  });
}
