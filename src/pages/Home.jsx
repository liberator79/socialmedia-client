import React from 'react'
import SideBar from '../components/SideBar'
const Home = () => {
  return (
    <div className='grid grid-cols-12 h-[100vh]'>
      <div className='col-span-3'>
        <SideBar />
      </div>
      <div className='col-span-6'></div>
      <div className='col-span-3'></div>
    </div>
  )
}

export default Home
