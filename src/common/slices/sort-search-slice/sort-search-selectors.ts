import { RootState } from '@/app/store'

export const selectSearching = (state: RootState) => state.sortSearch.searching
export const selectSorting = (state: RootState) => state.sortSearch.sorting
