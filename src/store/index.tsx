import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { categorySlice } from './features/categories'
import { entitySlice } from './features/currentEntity'

export const store = configureStore({
  reducer: combineReducers({
    [categorySlice.name]: categorySlice.reducer,
    [entitySlice.name]: entitySlice.reducer
  })
})
