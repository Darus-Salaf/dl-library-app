import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import useAuth from '../hooks/useAuth'

const AuthContext = createContext()

export default function AppContext({ children }) {
  const auth = useAuth()
  const [isAuth, setIsAuth] = useState(false)
  useEffect(() => {
    auth ? setIsAuth(true) : setIsAuth(false)
  }, [auth])
  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AuthContext)
}
