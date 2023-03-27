import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

const UserContext = createContext({})

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        console.log('currentUser', currentUser)
        setUser(currentUser)
      } else {
        console.log('else currentUser', currentUser)
        setUser(null)
      }
    })
    return () => {
      console.log('unsubscribe')
      unsubscribe()
    }
  }, [])

  return (
      <UserContext.Provider value={ {user} }>
        { children }
      </UserContext.Provider>
  )
}


export const useUserContext = () => {
  return useContext(UserContext)
}