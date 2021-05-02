import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICategoryStore } from '../../types'

const defaultState: ICategoryStore = {
  selectedCategory: 'all'
}

export const categorySlice = createSlice({
  name: 'category',
  initialState: defaultState,
  reducers: {
    setCategoryAction: (state: ICategoryStore, action: PayloadAction<string>): void => {
      state.selectedCategory = action.payload
    },
    resetCategoryAction: (state: ICategoryStore): void => {
      state.selectedCategory = defaultState.selectedCategory
    }
  }
})

export const { setCategoryAction, resetCategoryAction } = categorySlice.actions
