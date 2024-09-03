import React from 'react'
import SideBar from '../components/SideBar'
import MainBar from '../components/MainBar'
const Home = () => {
  return (
    <div className='grid grid-cols-12 h-[100vh]'>
      <div className='col-span-3'>
        <SideBar />
      </div>
      <div className='col-span-6 mt-3 overflow-y-scroll'>
        <MainBar/>
      </div>
      <div className='col-span-3'></div>
    </div>
  )
}

export default Home
