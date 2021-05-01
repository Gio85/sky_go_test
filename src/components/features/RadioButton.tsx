import React from 'react'
import styled from 'styled-components'
import { IOptions } from '../../types'

interface IProp extends IOptions {
  onChange: (data: any) => unknown
  checked: boolean
}

const StyledButton = styled.input`
  margin: 5px;
  cursor: pointer;
`

const StyledLabel = styled.label`
  margin: 5px;
`

export const RadioButton: React.FC<IProp> = (props) => {
  return (
    <StyledLabel className={props.checked ? 'is-active' : ''}>
      <StyledButton
        type="radio"
        name={props.label}
        value={props.label}
        checked={props.checked}
        onChange={props.onChange}
      />

      {props.label}
    </StyledLabel>
  )
}
