import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import PostCard from './PostCard';

const MainBar = () => {
    const token = useSelector((store) => store.token);
    const [data, setData] = useState([]); 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:3001/", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const postData = await response.json();
                setData(postData); 
            } catch (e) {
                console.log(e);
            }
        };

        fetchPosts();
    }, [token]); // Run effect when the user token changes
    console.log(token)
    return (
        <div>
            {   data && 
                data.map((post) => (
                    <div key={post.id} className='flex flex-col justify-start w-[100%] min-h-[100%]'>
                        <div className='bg-[rgb(33,40,48)] m-2 rounded-md'>
                            <PostCard post = {post} />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MainBar;
