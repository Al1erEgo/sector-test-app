import { useEffect } from 'react'

import {
  PageContentContainer,
  Paginator,
  SearchBar,
  useActions,
  useAppSelector,
  usePaginationWSearchParams,
} from '@/common'
import { selectSorting, sortSearchActions } from '@/common/slices'
import { TableBody, TableHead } from '@/modules/posts-table/components'
import { postsThunks, selectPostsWSearchSort } from '@/modules/posts-table/slice'
import { ColumnType } from '@/modules/posts-table/types'

const PostsTablePage = () => {
  const posts = useAppSelector(selectPostsWSearchSort)
  const sortDirection = useAppSelector(selectSorting)
  const { currentPageContent, currentPage, setCurrentPage } = usePaginationWSearchParams(posts)
  const { fetchPosts } = useActions(postsThunks)
  const { setSorting } = useActions(sortSearchActions)

  const postsTableColumns: ColumnType[] = [
    {
      dataIndex: 'id',
      title: 'ID',
      sorter: (newSorting: string) => setSorting(newSorting),
    },
    {
      dataIndex: 'title',
      title: 'Заголовок',
      sorter: (newSorting: string) => setSorting(newSorting),
    },
    {
      dataIndex: 'body',
      title: 'Описание',
      sorter: (newSorting: string) => setSorting(newSorting),
    },
  ]

  useEffect(() => {
    if (!posts.length) {
      fetchPosts()
    }
  }, [fetchPosts])

  return (
    <>
      <SearchBar />
      <TableHead columns={postsTableColumns} currentSortDirection={sortDirection} />
      <PageContentContainer>
        <TableBody rows={currentPageContent} />
      </PageContentContainer>
      <Paginator
        currentPage={currentPage}
        totalCount={posts.length}
        handleChange={setCurrentPage}
      />
    </>
  )
}

export default PostsTablePage
