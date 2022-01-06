import * as React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AuthProvider, { AuthStatus } from './components/AuthProvider'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import HomePageProtected from './pages/Homepage'
import SignUpInLayout from './layout/SignUpInLayout'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <AuthStatus />
      <Routes>
        <Route element={<SignUpInLayout />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route
          path="/"
          element={
            <RequireAuth>
              <HomePageProtected />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  )
}
