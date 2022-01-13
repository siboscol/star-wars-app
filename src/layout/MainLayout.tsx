import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveToolbar from '../components/ResponsiveToolbar'
import background from '../static/images/starwars-background.jpeg'

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
        <Outlet />
      </main>
      <Footer />
    </Box>
  )
}
