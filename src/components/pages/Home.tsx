import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { generateLink, getImageUrl } from '../../shared'
import { Link } from 'react-router-dom'
import { COLORS } from '../../shared/style'
import { resetSuggestionAction, setSuggestionAction } from '../../store/features/selectedSuggestion'
import { resetEntityAction, setEntityAction } from '../../store/features/currentEntity'

const SyledContainer = styled.div`
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, 1fr);
`
const StyledCard = styled.div`
  height: 20rem;
  width: 10rem;
  margin: 0 auto;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

const StyledMovieTitle = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: ${COLORS.FOCUS_BORDER_COLOR};
`

const StyledImage = styled.img`
  border-radius: 5px;
  height: 10rem;
`

export const Home: React.FC = () => {
  const results = useSelector((store: IRootStore) => store.results.results)
  const dispatch = useDispatch()
  console.log('results >>> ', results)
  return (
    <SyledContainer>
      {results.length > 0 &&
        results.map((r, i) => (
          <StyledCard key={i}>
            <StyledLink
              to={generateLink(r)}
              onClick={() => {
                dispatch(resetSuggestionAction())
                dispatch(resetEntityAction())
                dispatch(setEntityAction(r))
                dispatch(setSuggestionAction(r))
              }}
            >
              <StyledItem>
                {getImageUrl(r) ? (
                  <StyledImage
                    data-testid="suggestion__image"
                    className="suggestion__image"
                    src={`//image.tmdb.org/t/p/original${getImageUrl(r)}`}
                  />
                ) : (
                  <p>No image provided</p>
                )}

                <StyledMovieTitle>{r.name || r.title}</StyledMovieTitle>
              </StyledItem>
            </StyledLink>
          </StyledCard>
        ))}
    </SyledContainer>
  )
}
