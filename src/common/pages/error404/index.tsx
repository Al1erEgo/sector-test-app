import { useNavigate } from 'react-router-dom'

import { APP_PATHS } from '@/common/constants'

const Error404Page = () => {
  const navigate = useNavigate()

  return (
    <div>
      Запрашиваемая страница недоступна!
      <button onClick={() => navigate(APP_PATHS.ROOT)}>На главную</button>
    </div>
  )
}

export default Error404Page
