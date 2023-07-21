import { styled } from 'styled-components'

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 4fr;
  width: 100%;
`

export const TableRowItem = styled.div<{ end?: string }>`
  display: flex;
  align-items: center;
  padding: 16px;
  font-weight: 500;
  border-left: solid 1px;
  border-bottom: solid 1px;
  border-right: ${props => (props.end ? 'solid 1px' : '')};
  border-color: #e3e6ec;
`
