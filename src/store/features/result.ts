import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IResultsStore, TEntity } from '../../types'

const defaultState: IResultsStore<TEntity> = {
  results: []
}

export const resultsSlice = createSlice({
  name: 'results',
  initialState: defaultState,
  reducers: {
    setResultsAction: (state: IResultsStore<TEntity>, action: PayloadAction<TEntity[]>): void => {
      state.results = action.payload
    },
    resetResultsAction: (state: IResultsStore<TEntity>): void => {
      state.results = defaultState.results
    }
  }
})

export const { setResultsAction, resetResultsAction } = resultsSlice.actions
