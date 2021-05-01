import { ApiResponse, ENDPOINT, IHttpClient, IMovie } from '../../../../types'

export class MoviesEndpoint {
  public path = `${ENDPOINT.MOVIE}`
  constructor(protected readonly client: IHttpClient) {}

  public search(query: string): ApiResponse<IMovie> {
    return this.client.get(`search/${this.path}?query=${query}`)
  }

  public read(id: string): ApiResponse<IMovie> {
    return this.client.get(`${this.path}/${id}`)
  }
}
