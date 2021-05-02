import React from 'react'
import '../../index.css'
import { RouterProvider } from './providers/Router'
import { StoreProvider } from './providers/Store'

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <RouterProvider>
      </RouterProvider>
    </StoreProvider>
  )
}
