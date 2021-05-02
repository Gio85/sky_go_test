import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICurrentEntity, IThunk, TEntity } from '../../types'
import { ApiClient } from '../../data/api/client'

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

export const entityThunk = (id: string, category: string): IThunk => async (dispatch) => {
  try {
    const client = await ApiClient.getInstance()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await client[category].read(id)
    dispatch(setEntityAction(res))
  } catch (error) {
    console.error('error >>> ', error)
  } 
}

