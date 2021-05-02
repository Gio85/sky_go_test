import React  from 'react'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEntityAction } from '../../store/features/currentEntity'
import { getImageForResult } from '../../shared'

interface IProp {
  suggestions: any[] // TODO fix this type
  callback: (data: any) => unknown
}

const StyledSuggestionsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledSuggestions = styled.ul`
  position: absolute;
  list-style-type: none;
`

const StyledSuggestion = styled.li`
  border-radius: 5px;
  width: 580px;
`

const StyledImage = styled.img`
  border-radius: 5px;
  height: 58px;
  margin-left: 3px;
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
    <>
      {props.suggestions.length > 0 && (
        <StyledSuggestionsContainer>
          <StyledSuggestions>
            {props.suggestions.map((s, i) => (
              <StyledSuggestion key={i}>
                <StyledLink
                  to={`/current_entity`}
                  onClick={() => {
                    dispatch(setEntityAction(s))
                    props.callback(s)
                  }}
                >
                  <StyledItem>
                    <StyledMovieTitle>{s.name || s.title}</StyledMovieTitle>
                    <StyledImage
                      data-testid="suggestion__image"
                      className="suggestion__image"
                      src={
                        getImageForResult(s)
                          ? `//image.tmdb.org/t/p/original${getImageForResult(s)}`
                          : '/im-an-actor.jpeg'
                      }
                    />
                  </StyledItem>
                </StyledLink>
              </StyledSuggestion>
            ))}
          </StyledSuggestions>
        </StyledSuggestionsContainer>
      )}
    </>
  )
}
