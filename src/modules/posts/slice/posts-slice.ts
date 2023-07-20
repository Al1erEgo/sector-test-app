import { createSlice } from '@reduxjs/toolkit'

import { postsThunks } from './posts-thunks'

import { PostType } from '@/modules/posts/types'

const initialState: PostType[] = []

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(postsThunks.fetchPosts.fulfilled, (state, action) => action.payload)
  },
})

export const postsReducer = postsSlice.reducer
