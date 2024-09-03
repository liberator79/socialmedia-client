import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";


const PostCard = ({ post }) => {

    return (
        <div className=' p-2 flex flex-col justify-center items-start'>
            <div className='flex justify-start items-center gap-2 text-[rgb(225,229,230)] font-bold'>
                <img className = "rounded-full h-fit w-[7%]" src = "https://www.jammable.com/_next/image?url=https%3A%2F%2Fimagecdn.voicify.ai%2Fmodels%2Fe7ab898f-92e2-401e-9a85-aa2f42446594.png&w=3840&q=75" />
                <div>{post.name}</div>
            </div>
            <div className='p-2 flex flex-col'>
                <div className='text-white pt-2 font-semibold '>{post.postTitle}</div>
                <div className='text-white pt-2'>{post.postDescription}</div>
            </div>
        </div>
    )
}

export default PostCard
