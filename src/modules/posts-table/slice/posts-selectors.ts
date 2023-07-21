import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '@/app/store'
import { selectSearching, selectSorting } from '@/common/slices'

export const selectPosts = (state: RootState) => state.posts

export const selectPostsWSearchSort = createSelector(
  [selectSearching, selectSorting, selectPosts],
  (search, sort, posts) => {
    let completedPosts

    completedPosts = posts.filter(
      post =>
        post.id.toString().includes(search) ||
        post.title.includes(search) ||
        post.body.includes(search)
    )
    if (sort.includes('id')) {
      sort.includes('asc') && completedPosts.sort((a, b) => a.id - b.id)
      sort.includes('desc') && completedPosts.sort((a, b) => b.id - a.id)
    }
    if (sort.includes('title')) {
      sort.includes('asc') && completedPosts.sort((a, b) => (a.title > b.title ? 1 : -1))
      sort.includes('desc') && completedPosts.sort((a, b) => (b.title > a.title ? 1 : -1))
    }
    if (sort.includes('body')) {
      sort.includes('asc') && completedPosts.sort((a, b) => (a.body > b.body ? 1 : -1))
      sort.includes('desc') && completedPosts.sort((a, b) => (b.body > a.body ? 1 : -1))
    }

    return completedPosts
  }
)
