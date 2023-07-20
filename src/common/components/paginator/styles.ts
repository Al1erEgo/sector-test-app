import { styled } from 'styled-components'

export const StyledPaginationButton = styled.button<{ active?: string }>`
  appearance: none;
  border: none;
  background-color: transparent;
  color: ${props => (props.active ? '#7EBC3C' : '#474955')};
  font-weight: 500;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    color: #939396;
    cursor: auto;
  }
`
