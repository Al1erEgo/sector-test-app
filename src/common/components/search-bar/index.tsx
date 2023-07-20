import { useEffect, useState } from 'react'

import { useActions, useDebounce } from '@/common'
import {
  SearchBarContainer,
  StyledSearchButton,
  StyledSearchInput,
} from '@/common/components/search-bar/styles'
import { sortSearchActions } from '@/common/slices'

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const debouncedValue = useDebounce<string>(searchValue, 1000)
  const { setSearching } = useActions(sortSearchActions)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearching(searchValue)
    }
  }

  useEffect(() => {
    setSearching(debouncedValue)
  }, [debouncedValue])

  return (
    <SearchBarContainer>
      <StyledSearchInput
        type="search"
        placeholder="Поиск"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <StyledSearchButton onClick={() => setSearching(searchValue)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </StyledSearchButton>
    </SearchBarContainer>
  )
}
