import { FC } from 'react'

import { FlexContainer } from '@/common'
import { StyledPaginationButton } from '@/common/components/paginator/styles'

type PaginatorProps = {
  totalCount: number
  currentPage: number
  handleChange: (page: number) => void
}

export const Paginator: FC<PaginatorProps> = ({ totalCount, currentPage, handleChange }) => {
  const numOfPages = Math.ceil(totalCount / 10)
  const getButtonsForPages = () => {
    const buttons = []

    for (let i = 1; i <= numOfPages; i++) {
      buttons.push(
        <StyledPaginationButton
          key={i}
          active={currentPage === i ? 'active' : ''}
          onClick={() => handleChange(i)}
        >
          {i}
        </StyledPaginationButton>
      )
    }

    return buttons
  }

  return (
    <FlexContainer padding={'10px'} gap={'10px'}>
      <StyledPaginationButton
        onClick={() => handleChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Назад
      </StyledPaginationButton>
      <FlexContainer gap={'5px'} width={'80%'} flexdirection={'row'}>
        {getButtonsForPages()}
      </FlexContainer>
      <StyledPaginationButton
        onClick={() => handleChange(currentPage + 1)}
        disabled={totalCount - currentPage * 10 < 1}
      >
        Далее
      </StyledPaginationButton>
    </FlexContainer>
  )
}
