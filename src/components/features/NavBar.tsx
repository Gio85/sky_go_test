import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { SearchButton } from './SearchButton'
import { COLORS } from '../../shared/style'
import { SearchRadio } from './SearchRadio'

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.LIGHT_GREY};
  position: fixed;
  width: 100%;
`

const StyledForm = styled.form`
  width: 60%;
  margin: 0;
  text-align: center;
`

const StyledTitle = styled.h1`
  font-size: 1.8rem;
  margin: 5px;
  width: 92px;
  font-style: italic;
  background-size: 110%;
  background-repeat: repeat;
  background-image: linear-gradient(135deg, ${COLORS.ORANGE}, ${COLORS.RED}, ${COLORS.BLUE}, ${COLORS.PURPLE});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

export const NavBar: React.FC = () => {
  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 5) {
      console.log('e.target.value >>> ', e.target.value)
    }
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log('e >>> ', e)
  }

  return (
    <StyledNav>
      <StyledTitle>skyGo</StyledTitle>
      <StyledForm onSubmit={onSubmit}>
        <SearchBar onChange={onChange} />
        <SearchButton />
      </StyledForm>
      <SearchRadio />
    </StyledNav>
  )
}
