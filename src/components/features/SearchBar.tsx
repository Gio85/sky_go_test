import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { ApiClient } from '../../data/api/client'
import { SearchButton } from './SearchButton'
import { useHistory } from 'react-router-dom'
import { Suggestions } from './Suggestions'
import { resetEntityAction } from '../../store/features/currentEntity'
import { setSuggestionsListAction } from '../../store/features/selectedSuggestion'
import { resetResultsAction } from '../../store/features/result'

const StyledInput = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 25px;
  padding: 0 20px;
  margin: 5px 0;
  border: 1px solid white;

  :focus-visible {
    outline: none;
    border: 1px solid ${COLORS.FOCUS_BORDER_COLOR};
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`

export const SearchBar: React.FC = () => {
  const category = useSelector((store: IRootStore) => store.category.selectedCategory)
  const suggestions = useSelector((store: IRootStore) => store.selectedSuggestion.suggestionsList)
  const dispatch = useDispatch()
  const client = ApiClient.getInstance()
  const history = useHistory()

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 5) {
      history.push('/')
      dispatch(resetEntityAction())
      dispatch(resetResultsAction())
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const res = await client[category].search(e.target.value)
      dispatch(setSuggestionsListAction(res.results.splice(0, 5)))
    }
  }

  const onKeyDown = (e: any) => {
    console.log(e.keyCode)
  }

  return (
    <div>
      <StyledInput
        type="text"
        placeholder={'Search...'}
        autoFocus
        onChange={onChange}
        name="input"
        autoComplete="off"
        onKeyDown={onKeyDown}
      />
      <SearchButton />
      <Suggestions suggestions={suggestions} />
    </div>
  )
}
