import { styled } from 'styled-components'

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 4fr;
  width: 100%;
`

export const TableRowItem = styled.div<{ justifycontent?: string; end?: string }>`
  min-height: 50px;

  display: flex;
  align-items: center;
  justify-content: ${props => props.justifycontent || 'start'};
  padding: 10px;

  font-size: 0.9rem;
  font-weight: 500;

  border-left: solid 1px;
  border-bottom: solid 1px;
  border-right: ${props => (props.end ? 'solid 1px' : '')};
  border-color: #e3e6ec;
`
