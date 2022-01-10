import Login from './pages/LoginPage'
import SignUp from './pages/SignUpPage'
import MainLayout from './layout/MainLayout'
import SignUpInLayout from './layout/SignUpInLayout'
import DetailPage from './pages/DetailPage'
import useAuth, { AuthProvider } from './hooks/useAuth'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'
import OverviewPage from './pages/OverviewPage'

const PrivateRoute = () => {
  const { user } = useAuth()

  // If user is present, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<SignUpInLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/:resourses" element={<OverviewPage />} />
            <Route path="/:resourses/:id" element={<DetailPage />} />
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
