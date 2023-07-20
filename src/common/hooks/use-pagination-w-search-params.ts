import { useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'

export const usePaginationWSearchParams = <T>(data: T[]) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1)

  const currentPageContent = data.slice(currentPage * 10 - 10, currentPage * 10)

  useEffect(() => {
    if (data.length && !currentPageContent.length) {
      setCurrentPage(1)
    }
  }, [data])

  useEffect(() => {
    if (currentPage !== Number(searchParams.get('page'))) {
      setSearchParams({
        page: currentPage.toString(),
      })
    }
  }, [currentPage])

  useEffect(() => {
    if (currentPage !== Number(searchParams.get('page'))) {
      setCurrentPage(Number(searchParams.get('page')) || 1)
    }
  }, [searchParams])

  return { currentPageContent, currentPage, setCurrentPage }
}
