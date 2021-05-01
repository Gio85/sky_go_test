import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'

interface IProp {
  onChange: (e: any) => unknown
}

const StyledInput = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 25px;
  padding: 0 20px;
  margin: 5px 0;
  border: 1px solid white;

  :focus-visible {
    outline: none;
    border: 1px solid ${(props) => props.color};
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`

export const SearchBar: React.FC<IProp> = (props) => {
  return <StyledInput color={COLORS.focusBorderColor} placeholder={'Search...'} autoFocus onChange={props.onChange} />
}
