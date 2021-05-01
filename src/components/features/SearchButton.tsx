import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'

const StyledButton = styled.button`
  margin: 5px 5px 5px -40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: ${COLORS.FOCUS_BORDER_COLOR};
  }
`

export const SearchButton: React.FC = () => {
  return (
    <StyledButton type="submit">
      <i className="fas fa-search" />
    </StyledButton>
  )
}
