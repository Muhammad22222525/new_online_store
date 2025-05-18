import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
// import Footer from '../components/Footer'

function Layout() {
  return (
    <div>
        <Header />
        <main>
        <Outlet/>
        </main>
        {/* <Footer/> */}
    </div>
  )
}

export default Layout