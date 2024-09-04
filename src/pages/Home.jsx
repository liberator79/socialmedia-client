import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import MainBar from '../components/MainBar'
import NewPost from '../components/NewPost'
const Home = () => {
  const [postModal, setPostModal] = useState(false);
  return (
    <div className='grid grid-cols-12 h-[100vh]'>
      <div className='col-span-3'>
        <SideBar setPostModal = {setPostModal}/>
      </div>
      <div className='col-span-6 mt-3 overflow-y-scroll'>
        <MainBar />
        {
          postModal && <div className='w-[100%]'><NewPost open = {postModal} setOpen={setPostModal}/></div>
        }
      </div>
      <div className='col-span-3'></div>
    </div>
  )
}

export default Home
