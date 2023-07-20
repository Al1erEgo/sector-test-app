import { useEffect } from 'react'

import {
  PageContentContainer,
  Paginator,
  SearchBar,
  useActions,
  useAppSelector,
  usePaginationWSearchParams,
} from '@/common'
import { TableBody, TableHead } from '@/modules/posts-table/components'
import { postsThunks, selectPostsWSearchSort } from '@/modules/posts-table/slice'

const PostsTablePage = () => {
  const posts = useAppSelector(selectPostsWSearchSort)
  const { currentPageContent, currentPage, setCurrentPage } = usePaginationWSearchParams(posts)
  const { fetchPosts } = useActions(postsThunks)

  useEffect(() => {
    if (!posts.length) {
      fetchPosts()
    }
  }, [fetchPosts])

  return (
    <>
      <SearchBar />
      <PageContentContainer>
        <TableHead />
        <TableBody rows={currentPageContent} />
        <Paginator
          currentPage={currentPage}
          totalCount={posts.length}
          handleChange={setCurrentPage}
        />
      </PageContentContainer>
    </>
  )
}

export default PostsTablePage