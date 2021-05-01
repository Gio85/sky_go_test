import React, { useState } from 'react'
import styled from 'styled-components'
import { RadioButton } from './RadioButton'
import { IOptions } from '../../types'

const StyledRadioWrapper = styled.div`
  margin: 10px;
`

const options: IOptions[] = [{ label: 'All' }, { label: 'Movies' }, { label: 'Shows' }, { label: 'Actors' }]

export const SearchRadio: React.FC = () => {
  const [searchType, setSearchType] = useState<string>('all')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(e.target.value.toLowerCase())
  }

  console.log('searchType >>> ', searchType)

  return (
    <StyledRadioWrapper>
      {options.map((option, i) => (
        <RadioButton key={i} label={option.label} onChange={onChange} checked={option.label.toLowerCase() === searchType} />
      ))}
    </StyledRadioWrapper>
  )
}
