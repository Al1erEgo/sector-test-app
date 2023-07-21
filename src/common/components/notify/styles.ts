import { styled } from 'styled-components'

export const StyledNotify = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
  background-color: red;
  border-radius: 10px;
  position: absolute;
  bottom: 10%;
  left: 10%;
`

export const CloseNotifyButton = styled.button`
  appearance: none;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: 8px;
`
