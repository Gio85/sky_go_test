import React from 'react'
import { TEntity } from '../../types'
import { generateLink, getImageUrl, isActor, isMovie, isShow } from '../../shared'
import styled from 'styled-components'
import { COLORS } from '../../shared/style'
import { Link } from 'react-router-dom'
import { setSuggestionAction } from '../../store/features/selectedSuggestion'
import { useDispatch } from 'react-redux'

interface IProp {
  entity: TEntity
  suggestion: TEntity
}

const StyledCard = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid ${COLORS.LIGHT_GREY};
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  padding-bottom: 10px;
`

const StyledTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
`

const StyledImage = styled.img`
  border-radius: 5px;
  max-height: 700px;
  width: 100%;
`
const StyledPopularity = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: ${COLORS.YELLOW};
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const StyledMovieTitle = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  color: ${COLORS.FOCUS_BORDER_COLOR};
`

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px;
`

const StyledDetails = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 400;
`

function popularity(rating: number): string[] {
  const stars: string[] = []
  for (let i = 0; i < Math.floor(rating); i++) {
    stars.push('star')
  }
  if (rating % 1 > 0) stars.push('star')
  return stars
}

export const Card: React.FC<IProp> = (props) => {
  const { entity, suggestion } = props

  const dispatch = useDispatch()
  return (
    <StyledCard>
      {entity && (
        <StyledImage
          data-testid="suggestion__image"
          className="suggestion__image"
          src={
            getImageUrl(entity as any)
              ? `//image.tmdb.org/t/p/original${getImageUrl(entity as any)}`
              : '/im-an-actor.jpeg'
          }
        />
      )}
      <StyledTitle>{entity?.name || entity?.title}</StyledTitle>
      <StyledPopularity>
        {popularity(entity.vote_average || entity.popularity).map((s, i) => (
          <i key={i} className="fa fa-star" />
        ))}
      </StyledPopularity>
      {/* Actors */}
      {isActor(entity) && suggestion && suggestion.known_for && (
        <ul>
          {suggestion.known_for.map((kf, i) => (
            <StyledLink
              key={i}
              to={generateLink((kf as unknown) as TEntity)}
              onClick={() => {
                dispatch(setSuggestionAction(suggestion))
              }}
            >
              <StyledItem>
                <StyledMovieTitle>{kf.original_title || kf.original_name}</StyledMovieTitle>
              </StyledItem>
            </StyledLink>
          ))}
        </ul>
      )}

      {/*  Shows */}
      {isShow(entity) && (
        <StyledDetails>
          <p>{entity.overview}</p>
          <p>Status: {entity.status}</p>
          <p>Last air date: {entity.last_air_date}</p>
          <p>Seasons: {entity.seasons.length}</p>
          <p>Created by: {entity.created_by.map((c) => c.name).join(', ')}</p>
        </StyledDetails>
      )}

      {/*  Movies */}
      {isMovie(entity) && (
        <StyledDetails>
          <p>{entity.overview}</p>
          <p>Status: {entity.status}</p>
        </StyledDetails>
      )}
    </StyledCard>
  )
}
