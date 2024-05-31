import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { SearchRepositoryResponse } from './data/search-repository-response';
import { GITHUB_API_ENUM } from './enum/git-hub-api.enum';
import { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class GithubConsumingRepository {

  constructor(
    private readonly httpService: HttpService
  ) {
  }

  getRepositories(per_page: number): Observable<AxiosResponse> {
    const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
    if (!accessToken) {
      throw 'Missing Access Token from enviroment configuration';
    }
    const options = ['q=user:google', 'sort=stars', `per_page=${per_page}`]
    const headers = new AxiosHeaders({
      'Accept': GITHUB_API_ENUM.API_ACCEPT,
      'X-GitHub-Api-Version': GITHUB_API_ENUM.API_VERSION,
      'Authorization': `Bearer ${accessToken}`
    });
    const payload: AxiosRequestConfig = {
      url: `${GITHUB_API_ENUM.API_HOST_URL}${GITHUB_API_ENUM.API_SEARCH_REPOSITORY}?${options.join('&')}`,
      method: 'GET',
      headers
    }

    return this.httpService.request<SearchRepositoryResponse[]>(payload);
  }
}
