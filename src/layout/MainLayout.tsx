import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
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
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  )
}
