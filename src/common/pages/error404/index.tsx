import { useNavigate } from 'react-router-dom'

import { FullParentContainer } from '@/common'
import { APP_PATHS } from '@/common/constants'

const Error404Page = () => {
  const navigate = useNavigate()

  return (
    <FullParentContainer>
      Запрашиваемая страница недоступна!
      <button onClick={() => navigate(APP_PATHS.ROOT)}>На главную</button>
    </FullParentContainer>
  )
}

export default Error404Page
