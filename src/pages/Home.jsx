import React from 'react'
import Corusel from '../components/Corusel'
import AllProducts from '../product/AllProducts'
import DiscProducts from '../product/DiscProducts'

function Home() {
  return (
    <div className='max-w-[1140px] mx-auto mt-5'>
        <Corusel />
        <AllProducts />
        <DiscProducts/>
    </div>
  )
}

export default Home