import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload)
    },
    setPosts: (state, action) => {
      state.posts = action.payload
    }
  },
})

export const { addPost, setPosts } = postsSlice.actions

export default postsSlice.reducer