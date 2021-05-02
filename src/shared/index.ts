import { TEntity } from '../types'

export const isActor = (entity: TEntity): boolean => !!entity.known_for || !!entity.also_known_as
export const isMovie = (entity: TEntity): boolean => !!entity.title
export const isShow = (entity: TEntity): boolean => !!(entity.name && !entity.known_for && !entity.also_known_as)

export const getImageUrl = (entity: TEntity): string => {
  let imageUrl = ''

  if (isActor(entity)) imageUrl = entity.profile_path
  if (isShow(entity)) imageUrl = entity.poster_path
  if (isMovie(entity)) imageUrl = entity.backdrop_path || entity.poster_path

  return imageUrl
}

export const generateLink = (entity: TEntity): string => {
  let basePath = ''

  if (isActor(entity)) basePath = '/person'
  if (isShow(entity)) basePath = '/shows'
  if (isMovie(entity)) basePath = '/movies'

  return `${basePath}/${entity.id}`
}
