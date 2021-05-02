import React from 'react'
import { getImageUrl } from '../index'
import { TEntity } from '../../types'
import styled from 'styled-components'

interface IProp {
  entity: TEntity
}

const StyledFallback = styled.div`
  text-decoration: none;
  min-height: 15rem;
`

const StyledImage = styled.img`
  border-radius: 5px;
  min-height: 15rem;
  width: 100%;
`

export const Image: React.FC<IProp> = (props) => {
  const { entity } = props
  return (
    <>
      {getImageUrl(entity) ? (
        <StyledImage src={`//image.tmdb.org/t/p/original${getImageUrl(entity)}`} alt={'show image'} />
      ) : (
        <StyledFallback>
          <i className='fas fa-image fa-9x'/>
        </StyledFallback>

      )}
    </>
  )
}
