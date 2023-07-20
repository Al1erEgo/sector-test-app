import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type SortSearchSlice = {
  sorting: string
  searching: string
}

const initialState: SortSearchSlice = {
  sorting: '',
  searching: '',
}

const sortSearchSlice = createSlice({
  name: 'sortSearch',
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<string>) => {
      state.sorting = action.payload
    },

    setSearching: (state, action: PayloadAction<string>) => {
      state.searching = action.payload
    },
    clearFiltersAndSort: state => {
      state.sorting = ''
      state.searching = ''
    },
  },
})

export const sortSearchReducer = sortSearchSlice.reducer
export const sortSearchActions = sortSearchSlice.actions
