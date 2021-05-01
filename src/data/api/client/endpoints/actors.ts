import { ApiResponse, ENDPOINT, IActor, IHttpClient } from '../../../../types'

export class ActorsEndpoint {
  public path = `${ENDPOINT.ACTORS}`
  constructor(protected readonly client: IHttpClient) {}

  public search(query: string): ApiResponse<IActor> {
    return this.client.get(`search/${this.path}?query=${query}`)
  }

  public read(id: string): ApiResponse<IActor> {
    return this.client.get(`${this.path}/${id}`)
  }
}
