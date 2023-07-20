import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { appReducer } from '@/app/app-slice'
import { postsReducer } from '@/modules/posts/slice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    posts: postsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
