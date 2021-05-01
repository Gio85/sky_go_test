import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { SearchButton } from './SearchButton'
import { COLORS } from '../../shared/style'

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.DARK_BLUE};
`

const StyledForm = styled.form`
  width: 60%;
  margin: 0;
  text-align: center;
`

const StyledTitle = styled.h1`
  font-size: 1.8rem;
  margin: 5px;
  font-style: italic;
  color: ${COLORS.TITLE};
  text-shadow: 1px 0 0 ${COLORS.WHITE}, -1px 0 0 ${COLORS.WHITE}, 0 1px 0 ${COLORS.WHITE}, 0 -1px 0 ${COLORS.WHITE},
    1px 1px ${COLORS.WHITE}, -1px -1px 0 ${COLORS.WHITE}, 1px -1px 0 ${COLORS.WHITE}, -1px 1px 0 ${COLORS.WHITE};
`

export const NavBar: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    return '' as unknown
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('e >>> ', e)
  }

  return (
    <StyledNav>
      <StyledTitle>Sky Go</StyledTitle>
      <StyledForm onSubmit={onSubmit}>
        <SearchBar onChange={onChange} />
        <SearchButton />
      </StyledForm>
    </StyledNav>
  )
}
