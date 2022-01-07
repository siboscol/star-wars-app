import Login from './pages/LoginPage'
import SignUp from './pages/SignUpPage'
import MainLayout from './layout/MainLayout'
import SignUpInLayout from './layout/SignUpInLayout'
import Gallery from './pages/GalleryPage'
import Planets from './pages/PlanetsPage'
import HomePage from './pages/HomePage'
import useAuth, { AuthStatus, AuthProvider } from './hooks/useAuth'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const { user } = useAuth()

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default function App() {
  return (
    <AuthProvider>
      <AuthStatus />
      <Routes>
        <Route element={<SignUpInLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/planets" element={<Planets />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </AuthProvider>
  )
}
