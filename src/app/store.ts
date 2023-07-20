import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import { appReducer } from '@/app/app-slice'
import { sortSearchReducer } from '@/common/slices'
import { postsReducer } from '@/modules/posts-table'

export const store = configureStore({
  reducer: {
    app: appReducer,
    posts: postsReducer,
    sortSearch: sortSearchReducer,
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
