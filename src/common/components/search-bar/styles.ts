import { styled } from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: end;
  margin-bottom: 10px;
`

export const StyledSearchInput = styled.input`
  border: none;
  border-radius: 0;
  width: 50vw;
  height: 50px;

  color: #b2b7bf;
  background-color: #5a5c66;
  display: inline-flex;
  padding-left: 20px;
  align-items: center;

  &::placeholder {
    color: #b2b7bf;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
  }
`

export const StyledSearchButton = styled.button`
  width: 50px;
  height: 50px;
  appearance: none;
  border: none;
  background-color: #5a5c66;
  color: #b2b7bf;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    stroke: #b2b7bf;
  }

  &:hover svg {
    stroke: #ffffff;
  }
`
