import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { useNavigate } from 'react-router-dom'
import { fakeAuthProvider } from '../services/fake-auth-service'

interface AuthContextType {
  user?: any
  login: (email: string, password: string) => void
  signup: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export function AuthProvider({
  children
}: {
  children: ReactNode
}): JSX.Element {
  const [user, setUser] = useState<any>()
  const navigate = useNavigate()

  useEffect(() => {
    fakeAuthProvider.getCurrentUser().then(user => {
      setUser(user)
      navigate('/home', { replace: true })
    })
  }, [])

  const login = (email: string, passowrd: string) => {
    fakeAuthProvider.login(email, passowrd).then(user => {
      setUser(user)
      navigate('/home', { replace: true })
    })
  }

  const signup = (
    firstName: string,
    lastName: string,
    email: string,
    passowrd: string
  ) => {
    fakeAuthProvider.signup(firstName, lastName, email, passowrd).then(user => {
      setUser(user)
      navigate('/home', { replace: true })
    })
  }

  const logout = () => {
    fakeAuthProvider.logout().then(() => setUser(undefined))
  }

  // Make the provider update only when it should.
  // We only want to force re-renders if the user,
  // loading or error states change.
  //
  // Whenever the `value` passed into a provider changes,
  // the whole tree under the provider re-renders, and
  // that can be very costly! Even in this case, where
  // you only get re-renders when logging in and out
  // we want to keep things very performant.
  const memoedValue = useMemo(
    () => ({
      user,
      login,
      logout,
      signup
    }),
    [user]
  )

  // We only want to render the underlying app after we
  // assert for the presence of a current user.
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  )
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
  return useContext(AuthContext)
}

export function AuthStatus() {
  let auth = useAuth()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  return (
    <p>
      Welcome {auth.user}!{' '}
      <button
        onClick={() => {
          auth.logout()
        }}
      >
        Sign out
      </button>
    </p>
  )
}
