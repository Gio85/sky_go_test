import env from 'dotenv'
import { HttpClient } from './http'
import { MoviesEndpoint } from './endpoints/movies'
import { ActorsEndpoint } from './endpoints/actors'
import { ShowsEndpoint } from './endpoints/shows'
import { MultiEndpoint } from './endpoints/multi'

env.config()

export class ApiClient {
  private static instance: ApiClient
  public movies: MoviesEndpoint
  public actors: ActorsEndpoint
  public shows: ShowsEndpoint
  public all: MultiEndpoint
  protected client: HttpClient

  protected constructor(public readonly host = process.env.HOST_API || process.env.REACT_APP_HOST_API) {
    this.client = new HttpClient()
    this.movies = new MoviesEndpoint(this.client)
    this.actors = new ActorsEndpoint(this.client)
    this.shows = new ShowsEndpoint(this.client)
    this.all = new MultiEndpoint(this.client)
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient()
    }
    return ApiClient.instance
  }
}
