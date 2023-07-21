import { useEffect } from 'react'

import { createPortal } from 'react-dom'

import { selectAppErrorMessage } from '@/app/app-selectors'
import { appActions } from '@/app/app-slice'
import { useActions, useAppSelector } from '@/common'
import { CloseNotifyButton, StyledNotify } from '@/common/components/notify/styles'

export const Notify = () => {
  const error = useAppSelector(selectAppErrorMessage)
  const { clearError } = useActions(appActions)
  const mount = document.getElementById('root')
  const el = document.createElement('div')

  const notify = error && (
    <StyledNotify>
      <p>{error}</p>
      <CloseNotifyButton onClick={() => clearError()}>X</CloseNotifyButton>
    </StyledNotify>
  )

  useEffect(() => {
    const unmount = () => {
      mount?.removeChild(el)
    }

    mount?.appendChild(el)

    setTimeout(() => clearError(), 5000)

    return () => unmount()
  }, [el, mount])

  return createPortal(notify, el)
}
