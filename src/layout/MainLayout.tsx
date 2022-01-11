import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ResponsiveToolbar from '../components/ResponsiveToolbar'

export default function MainLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundImage:
          'url(https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-14.jpg)',
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
