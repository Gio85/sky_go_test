import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentEntity, TEntity } from '../../types'

const defaultState: ICurrentEntity<TEntity> = {
  entity: null
}

export const entitySlice = createSlice({
  name: 'currentEntity',
  initialState: defaultState,
  reducers: {
    setEntityAction: (state: ICurrentEntity<TEntity>, action: PayloadAction<TEntity>): void => {
      state.entity = action.payload
    },
    resetEntityAction: (state: ICurrentEntity<TEntity>): void => {
      state.entity = defaultState.entity
    }
  }
})

export const { setEntityAction, resetEntityAction } = entitySlice.actions
