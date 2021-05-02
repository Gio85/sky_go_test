import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../../store'

export const StoreProvider: React.FC = (props): React.ReactElement => (
  <Provider store={store}>{props.children}</Provider>
)
