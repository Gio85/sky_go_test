import Axios, { AxiosRequestConfig } from 'axios'
import { ApiResponse, IHttpClient } from '../../../../types'

export class HttpClient implements IHttpClient {
  protected api: string = process.env.REACT_APP_API_HPST || ''
  public get<T>(endpoint: string, parameters?: unknown): ApiResponse<T> {
    return Axios.get(`${this.api}/${endpoint}`, {
      params: parameters || null,
      ...this.getRequestConfig()
    }).then(({ data }) => ({ ...data }))
  }

  protected getRequestConfig(): AxiosRequestConfig {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_MDB_TOKEN}`
      }
    }
  }
}
