import React from 'react'
import PostCard from '../components/PostCard'
import SideBar from '../components/SideBar'
const Home = () => {
  return (
    <div className='grid grid-cols-12 h-[100vh]'>
      <div className='col-span-3'>
        <SideBar />
      </div>
      <div className='col-span-6 mt-3 overflow-y-scroll'>
        <div className='flex flex-col justify-start  w-[100%] min-h-[100%]'>
          <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
            <PostCard />
          </div>
          <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
            <PostCard />
          </div>
          <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
            <PostCard />
          </div>
          <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
            <PostCard />
          </div>
          <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
            <PostCard />
          </div>
          <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
            <PostCard />
          </div>
          
        </div>
      </div>
      <div className='col-span-3'></div>
    </div>
  )
}

export default Home
