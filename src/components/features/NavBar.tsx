import React from 'react'
import styled from 'styled-components'
import { SearchBar } from './SearchBar'
import { COLORS } from '../../shared/style'
import { SearchRadio } from './SearchRadio'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { ApiClient } from '../../data/api/client'
import { setResultsAction } from '../../store/features/result'
import { resetSuggestionsListAction } from '../../store/features/selectedSuggestion'

const StyledNav = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.LIGHT_GREY};
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
  const category = useSelector((store: IRootStore) => store.category.selectedCategory)
  const client = ApiClient.getInstance()
  const dispatch = useDispatch()
  const onSubmit = async (e: any) => {
    e.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await client[category].search(e.target.input.value)
    dispatch(setResultsAction(res.results))
    dispatch(resetSuggestionsListAction())

  }

  return (
    <StyledNav>
      <StyledTitle>skyGo</StyledTitle>
      <StyledForm onSubmit={onSubmit}>
        <SearchBar />
      </StyledForm>
      <SearchRadio />
    </StyledNav>
  )
}
