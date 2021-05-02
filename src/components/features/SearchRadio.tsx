import React from 'react'
import styled from 'styled-components'
import { RadioButton } from './RadioButton'
import { IOptions, IRootStore } from '../../types'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryAction } from '../../store/features/categories'
import { resetSuggestionsListAction } from '../../store/features/selectedSuggestion'

const StyledRadioWrapper = styled.div`
  margin: 10px;
`

const options: IOptions[] = [{ label: 'All' }, { label: 'Movies' }, { label: 'Shows' }, { label: 'Actors' }]

export const SearchRadio: React.FC = () => {
  const dispatch = useDispatch()
  const category = useSelector((store: IRootStore) => store.category.selectedCategory)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(resetSuggestionsListAction())
    dispatch(setCategoryAction(e.target.value.toLowerCase()))
  }

  return (
    <StyledRadioWrapper>
      {options.map((option, i) => (
        <RadioButton
          key={i}
          label={option.label}
          onChange={onChange}
          checked={option.label.toLowerCase() === category}
        />
      ))}
    </StyledRadioWrapper>
  )
}
