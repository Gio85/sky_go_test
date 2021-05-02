import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'
import { Link } from 'react-router-dom'
import { generateLink } from '../../shared'
import { TEntity } from '../../types'
import { useDispatch } from 'react-redux'
import { resetSuggestionsListAction, setSuggestionAction } from '../../store/features/selectedSuggestion'

interface IProp {
  suggestions: TEntity[]
}

const StyledSuggestionsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSuggestions = styled.ul`
  position: absolute;
  list-style-type: none;
  top: 0;
  width: 30%;
`

const StyledSuggestion = styled.li`
  border-radius: 5px;
`

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px;
`

const StyledMovieTitle = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: ${COLORS.FOCUS_BORDER_COLOR};
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

export const Suggestions: React.FC<IProp> = (props) => {
  const dispatch = useDispatch()
  return (
    <StyledSuggestionsContainer>
      {props.suggestions.length > 0 && (
        <StyledSuggestions>
          {props.suggestions.map((s, i) => (
            <StyledSuggestion key={i}>
              <StyledLink
                to={generateLink(s)}
                onClick={() => {
                  dispatch(setSuggestionAction(s))
                  dispatch(resetSuggestionsListAction())
                }}
              >
                <StyledItem>
                  <StyledMovieTitle>{s.name || s.title}</StyledMovieTitle>
                </StyledItem>
              </StyledLink>
            </StyledSuggestion>
          ))}
        </StyledSuggestions>
      )}
    </StyledSuggestionsContainer>

  )
}
