import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ResponsiveToolbar from '../components/ResponsiveToolbar'

export default function MainLayout() {
  return (
    <React.Fragment>
      <ResponsiveToolbar />
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  )
}
