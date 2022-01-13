import { Box } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveToolbar from '../components/ResponsiveToolbar'
import background from '../static/images/starwars-background.jpeg'
import ErrorFallback from '../components/GenericErrorFallback'

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100vw',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <ResponsiveToolbar />
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </Box>
  )
}
