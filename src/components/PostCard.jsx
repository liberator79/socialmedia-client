import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


const PostCard = ({post}) => {
   
    return (
        <div className='p-2 w-[100%]'>
            <div className='flex gap-2 justify-start'>
            <div className=''>{post.userPicPath ? <img /> : <FaRegUserCircle/>}</div>
            </div>

        </div>
    )
}

export default PostCard
