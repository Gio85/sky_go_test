import { ApiResponse, ENDPOINT, IHttpClient, IShow } from '../../../../types'

export class ShowsEndpoint {
  public path = `${ENDPOINT.SHOW}`
  constructor(protected readonly client: IHttpClient) {}

  public search(query: string): ApiResponse<IShow> {
    return this.client.get(`search/${this.path}?query=${query}`)
  }

  public read(id: string): ApiResponse<IShow> {
    return this.client.get(`${this.path}/${id}`)
  }
}
