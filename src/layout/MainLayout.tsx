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
        minHeight: '100vh'
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
