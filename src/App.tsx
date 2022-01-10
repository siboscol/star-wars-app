import Login from './pages/LoginPage'
import SignUp from './pages/SignUpPage'
import MainLayout from './layout/MainLayout'
import SignUpInLayout from './layout/SignUpInLayout'
import DetailLayout from './layout/DetailLayout'
import HomePage from './pages/HomePage'
import CharactersPage from './pages/CharactersPage'
import FilmsPage from './pages/FilmsPage'
import StarshipsPage from './pages/StarshipsPage'
import VehiclesPage from './pages/VehiclesPage'
import SpeciesPage from './pages/SpeciesPage'
import PlanetsPage from './pages/PlanetsPage'
import useAuth, { AuthProvider } from './hooks/useAuth'
import { Route, Routes, Navigate, Outlet } from 'react-router-dom'

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
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/planets" element={<PlanetsPage />} />
            <Route path="/planets/:id" element={<DetailLayout />} />
            <Route path="/films" element={<FilmsPage />} />
            <Route path="/films/:id" element={<DetailLayout />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/characters/:id" element={<DetailLayout />} />
            <Route path="/starships" element={<StarshipsPage />} />
            <Route path="/starships/:id" element={<DetailLayout />} />
            <Route path="/vehicles" element={<VehiclesPage />} />
            <Route path="/vehicles/:id" element={<DetailLayout />} />
            <Route path="/species" element={<SpeciesPage />} />
            <Route path="/species/:id" element={<DetailLayout />} />
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
