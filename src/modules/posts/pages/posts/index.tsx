import { useEffect } from 'react'

import { useActions, useAppSelector } from '@/common'
import { postsThunks, selectPosts } from '@/modules/posts/slice'

const PostsPage = () => {
  const posts = useAppSelector(selectPosts)
  const { fetchPosts } = useActions(postsThunks)

  useEffect(() => {
    if (!posts.length) {
      fetchPosts()
    }
  }, [fetchPosts])

  return (
    <>
      <div>Посты</div>
      {posts?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </>
  )
}

export default PostsPage
