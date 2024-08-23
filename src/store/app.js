import { createSlice } from "@reduxjs/toolkit";

const intialState = {
    mode : "dark",
    user : null,
    token : null,
    posts : [],
}

export const appSlice = createSlice({
    name : "app",
    intialState,
    reducers :{
        setMode : (state) => {
            state.mode = state.mode === "dark"?"light":"dark";
        },
        setUser : (state, action) => 
        {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        removeUser : (state) => {
            state.user = null;
            state.token = null;
        },
        setPosts : (state, action) => {
            state.posts = action.payload.posts;
        },
        updatePost : (state, action) => {
            const update = state.posts.map((post) => {
                if(post._id === action.payload.post._id)return action.payload.post
                return post;
            })
            state.posts = upadate;
        }
    }
})

export const {setMode, setUser, setPosts, removeUser, updatePost} = appSlice.actions

export default appSlice.reducer