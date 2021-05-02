import React from 'react'
import styled from 'styled-components'
import '../../index.css'
import { RouterProvider } from './providers/Router'
import { StoreProvider } from './providers/Store'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const App: React.FC = () => {
  return (
    <StoreProvider>
      <RouterProvider>
        <Wrapper></Wrapper>
      </RouterProvider>
    </StoreProvider>
  )
}
