import { styled } from 'styled-components'

export const TableHeadRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 4fr;
  width: 100%;
  background-color: #474955;
  color: #e6e7ea;
`

export const TableHeadItem = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
  padding: 10px;
  padding-left: 20%;
  font-weight: 500;
  gap: 20px;

  cursor: pointer;
`
