import { AppRouter } from '@/common/routers/app-router'
import { GlobalStyle } from '@/common/styles'

export const App = () => {
  return (
    <>
      <AppRouter />
      <GlobalStyle />
    </>
  )
}
