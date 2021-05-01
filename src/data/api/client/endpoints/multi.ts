import { ApiResponse, ENDPOINT, IActor, IHttpClient, IMovie, IShow } from '../../../../types'

export class MultiEndpoint {
  public path = `${ENDPOINT.ALL}`
  constructor(protected readonly client: IHttpClient) {}

  public search(query: string): ApiResponse<IActor | IShow | IMovie> {
    return this.client.get(`search/${this.path}?query=${query}`)
  }

  public read(id: string): ApiResponse<IActor | IShow | IMovie> {
    return this.client.get(`${this.path}/${id}`)
  }
}
