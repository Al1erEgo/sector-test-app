import { Suspense } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import { Loader } from '@/common/components/loader'
import { APP_PATHS } from '@/common/constants'
import { Error404Page } from '@/common/pages'
import { PageContainer } from '@/common/styles/common-styled-components'
import { PostsPage } from '@/modules/posts'

export const AppRouter = () => {
  return (
    <PageContainer>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={APP_PATHS.ROOT} element={<Navigate to={APP_PATHS.POSTS} />} />
          <Route path={APP_PATHS.POSTS} element={<PostsPage />} />
          <Route path={'*'} element={<Error404Page />} />
        </Routes>
      </Suspense>
    </PageContainer>
  )
}
