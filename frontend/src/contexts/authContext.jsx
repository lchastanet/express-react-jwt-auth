import { createContext, useContext, useState } from "react"

const CurrentUserContext = createContext()

export const useAuthContext = () => useContext(CurrentUserContext)

export const CurrentUserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || { roles: ["visitor"] }
  )

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  )
}
