import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { IRootStore } from '../../types'
import { Card } from '../features/EntityCard'
import { entityThunk } from '../../store/features/currentEntity'
import { RouteComponentProps } from 'react-router-dom'

interface IProp {
  id: string
}

const StyledContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
`

export const EntityDetails: React.FC<RouteComponentProps<IProp>> = (props) => {
  const { id } = props.match.params
  const { pathname } = props.location
  const dispatch = useDispatch()

  const category = pathname.includes('person') ? 'actors' : pathname.includes('shows') ? 'shows' : 'movies'

  const entity = useSelector((store: IRootStore) => store.currentEntity.entity)
  const selectedSuggestion = useSelector((store: IRootStore) => store.selectedSuggestion.suggestion)

  useEffect(() => {
    dispatch(entityThunk(id, category))
  }, [id, category, dispatch, pathname])

  return (
    <StyledContainer>
      {entity && selectedSuggestion && <Card entity={entity} suggestion={selectedSuggestion} />}
    </StyledContainer>
  )
}
