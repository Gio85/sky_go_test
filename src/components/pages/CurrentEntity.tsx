import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { getImageForResult } from '../../shared'

const StyledContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`

const StyledCard = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`

const StyledTitle = styled.h2`
  text-align: center;
`

const StyledImage = styled.img`
  border-radius: 5px;
  height: 80%;
  width: 50%;
  margin: 0 auto;
  
`

export const CurrentEntity: React.FC = () => {
  const entity = useSelector((store: IRootStore) => store.currentEntity.entity)
  return (
    <StyledContainer>
      <StyledCard>
        {entity && <StyledImage
          data-testid="suggestion__image"
          className="suggestion__image"
          src={
            getImageForResult(entity as any)
              ? `//image.tmdb.org/t/p/original${getImageForResult(entity as any)}`
              : '/im-an-actor.jpeg'
          }
        />}
        <StyledTitle>{entity?.name}</StyledTitle>
      </StyledCard>
    </StyledContainer>
  )
}
