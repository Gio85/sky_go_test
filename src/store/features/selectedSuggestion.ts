import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISelectedSuggestion, TEntity } from '../../types'

const defaultState: ISelectedSuggestion<TEntity> = {
  suggestion: null,
  suggestionsList: []
}

export const suggestionSlice = createSlice({
  name: 'selectedSuggestion',
  initialState: defaultState,
  reducers: {
    setSuggestionAction: (state: ISelectedSuggestion<TEntity>, action: PayloadAction<TEntity>): void => {
      state.suggestion = action.payload
    },
    setSuggestionsListAction: (state: ISelectedSuggestion<TEntity>, action: PayloadAction<TEntity[]>): void => {
      state.suggestionsList = action.payload
    },
    resetSuggestionsListAction: (state: ISelectedSuggestion<TEntity>): void => {
      state.suggestionsList = defaultState.suggestionsList
    },
    resetSuggestionAction: (state: ISelectedSuggestion<TEntity>): void => {
      state.suggestion = defaultState.suggestion
    }
  }
})

export const {
  setSuggestionAction,
  resetSuggestionAction,
  setSuggestionsListAction,
  resetSuggestionsListAction
} = suggestionSlice.actions
