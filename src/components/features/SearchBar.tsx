import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'
import { useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { ApiClient } from '../../data/api/client'
import { SearchButton } from './SearchButton'
import { Suggestions } from './Suggestions'

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
  const [suggestions, setSuggestions] = useState<any[]>([])
  const category = useSelector((store: IRootStore) => store.category.selectedCategory)
  const client = ApiClient.getInstance()

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length >= 5) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const res = await client[category].search(e.target.value)
      setSuggestions(res.results.splice(0, 5))
    }
  }

  const onKeyDown = (e: any) => {
    // const { filteredOptions, activeOption } = stateObj
    console.log(e.keyCode)
    // if (e.keyCode === 13) {
    //   setStateObj({
    //     activeOption: 0,
    //     showSuggestions: false,
    //     userInput: filteredOptions[activeOption]
    //   })
    // } else if (e.keyCode === 38) {
    //   if (activeOption === 0) {
    //     return
    //   }
    //   setStateObj({ activeOption: activeOption - 1 })
    // } else if (e.keyCode === 40) {
    //   if (activeOption - 1 === filteredOptions.length) {
    //     return
    //   }
    //   setStateObj({ activeOption: activeOption + 1 })
    // }
    //   38 up
    //  40 down
    //   13 enter
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
      <Suggestions suggestions={suggestions} callback={setSuggestions} />
    </div>
  )
}
