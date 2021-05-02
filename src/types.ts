import { Action, ThunkAction } from '@reduxjs/toolkit'

export interface IHttpClient {
  get<T>(path: string, parameter?: any): ApiResponse<T>
}

export type ApiResponse<T> = Promise<IApiResponse<T> & (T & { status: number })>
export type IThunk = ThunkAction<void, IRootStore, unknown, Action<string>>

export interface IApiResponse<T> {
  page: number
  total_pages: number
  total_results: number
  results: T[]
}

export enum ENDPOINT {
  MOVIE = 'movie',
  ALL = 'multi',
  SHOW = 'tv',
  ACTORS = 'person'
}

export enum ROUTE {
  HOME = '/',
  READ_MOVIE = '/movies/:id',
  READ_SHOW = '/shows/:id',
  READ_ACTORS = '/person/:id'
}

interface IEntity {
  genre_ids: number[]
  id: number
  original_language: string
  backdrop_path: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface IMovie extends IEntity {
  adult: boolean
  original_title: string
  overview: string
  release_date: string
  title: string
  video: false
}

export interface IShow extends IEntity {
  first_air_date: string
  name: string
  origin_country: string[]
  original_name: string
  overview: string
  last_air_date: string
  seasons: Record<string, any>[]
  status: string
  created_by: Record<string, any>[]
}

export interface IActor {
  adult: boolean
  gender: number
  id: number
  also_known_as: string[]
  known_for: IActorKnownFor[]
  known_for_department: string
  name: string
  popularity: number
  profile_path: string
}

export interface IActorKnownFor extends IEntity {
  first_air_date: string
  media_type: string
  name: string
  origin_country: string[]
  original_name: string
  original_title: string
  overview: string
  vote_average: number
  vote_count: number
}

export interface IOptions {
  label: string
}

export interface ICategoryStore {
  selectedCategory: string
}

export interface ICurrentEntity<T> {
  entity: T | null
}

export interface ISelectedSuggestion<T> {
  suggestion: T | null
  suggestionsList: T[] | []
}

export interface IResultsStore<T> {
  results: T[]
}

export type TEntity = IActor & IShow & IMovie

export interface IRootStore {
  category: ICategoryStore
  currentEntity: ICurrentEntity<TEntity>
  selectedSuggestion: ISelectedSuggestion<TEntity>
  results: IResultsStore<TEntity>
}
