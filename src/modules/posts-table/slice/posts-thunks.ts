import { createAsyncThunk } from '@reduxjs/toolkit'

import { postsApi } from '../api'
import { PostType } from '../types'

import { appActions } from '@/app/app-slice'

const fetchPosts = createAsyncThunk<PostType[], void>(
  'posts/fetchPosts',
  async (_, { dispatch }) => {
    try {
      dispatch(appActions.setDataLoading(true))
      const posts = await postsApi.getPosts()

      return posts.data
    } finally {
      dispatch(appActions.setDataLoading(false))
    }
  }
)

export const postsThunks = {
  fetchPosts,
}
