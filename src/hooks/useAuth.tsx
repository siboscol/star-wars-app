import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from '../services/AuthService'

interface AuthContextType {
  user?: any
  login: (email: string, password: string) => void
  signup: (firstName: string, lastName: string, email: string, password: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
  const [user, setUser] = useState<any>()
  const navigate = useNavigate()

  useEffect(() => {
    AuthService.getCurrentUser().then(user => {
      setUser(user)
      navigate('/', { replace: true })
    })
  }, [])

  const login = (email: string, passowrd: string) => {
    AuthService.login(email, passowrd).then(user => {
      setUser(user)
      navigate('/', { replace: true })
    })
  }

  const signup = (firstName: string, lastName: string, email: string, passowrd: string) => {
    AuthService.signup(firstName, lastName, email, passowrd).then(user => {
      setUser(user)
      navigate('/', { replace: true })
    })
  }

  const logout = () => {
    AuthService.logout().then(() => setUser(undefined))
  }

  const memoedValue = useMemo(
    () => ({
      user,
      login,
      logout,
      signup
    }),
    [user]
  )

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
}

export default function useAuth() {
  return useContext(AuthContext)
}
