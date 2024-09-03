import React from 'react'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PostCard from './PostCard';
const MainBar = () => {
    const user = useSelector((store) => store.user);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = fetch("http:localhost:3001/",
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${user.token}`
                        }
                    }
                );
                const data = await postData.json();
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    })
    return (
        <div>
            {
                data.map((post) => {
                    <PostCard post = {post}/>
                })
            }
        </div>
    )
}

export default MainBar
