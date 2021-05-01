import React from 'react'
import styled from 'styled-components'
import { NavBar } from '../features/NavBar'
import '../../index.css'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`

export const App: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
    </Wrapper>
  )
}
