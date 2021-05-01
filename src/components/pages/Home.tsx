import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
`

export const Home: React.FC = () => {
  return <StyledTitle>Home Page</StyledTitle>
}
