import React from 'react'
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { CiBookmarkPlus } from "react-icons/ci";

const SideBar = () => {
    const sideBarIcons = [{ icon: <CiHome />, name: "Home" },
    { icon: <LiaUserFriendsSolid />, name: "Friends" },
    { icon: <CiBookmarkPlus />, name : "Create" },
    { icon: <CgProfile />, name:  "Profile"},

    ]
    return (
        <div className='flex flex-col gap-2 p-10 items-start h-[100vh] w-[100%]'>
            <div className='font-semibold text-2xl text-white p-2'>Madhyam</div>
            {
                sideBarIcons.map((icon , id) => {
                    return (
                        <div className='flex justify-center items-center gap-3 font-semibold text-white text-xl cursor-pointer p-2 rounded-full px-3' key = {id}>
                            {icon.icon}
                            <span>{icon.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideBar
