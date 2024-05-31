import { Test, TestingModule } from '@nestjs/testing';
import { GithubConsumingRepository } from '../github-consuming.repository';
import { HttpService } from '@nestjs/axios';
import { AxiosHeaders, AxiosRequestConfig } from 'axios';
import { GITHUB_API_ENUM } from '../enum/git-hub-api.enum';
import * as dotenv from 'dotenv';

describe('GithubConsumingRepository', () => {
  const httpMock = {
    request: jest.fn(),
  };
  let repository: GithubConsumingRepository;
  let httpService: HttpService;

  beforeEach(async () => {
    dotenv.config({ path: './.env.example' });
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubConsumingRepository,
        {
          provide: HttpService,
          useValue: httpMock
        }
      ]
    }).compile();
    repository = module.get<GithubConsumingRepository>(GithubConsumingRepository);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('getRepostories', () => {
    it('should request correctly github api', () => {
      const params = { per_page: 10 };
      const options = ['q=user:google', 'sort=stars', `per_page=${params.per_page}`]
      const headers = new AxiosHeaders({
        'Accept': GITHUB_API_ENUM.API_ACCEPT,
        'X-GitHub-Api-Version': GITHUB_API_ENUM.API_VERSION,
        'Authorization': `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`
      });
      const payload: AxiosRequestConfig = {
        url: `${GITHUB_API_ENUM.API_HOST_URL}${GITHUB_API_ENUM.API_SEARCH_REPOSITORY}?${options.join('&')}`,
        method: 'GET',
        headers
      }
      repository.getRepositories(params.per_page);
      expect(httpService.request).toHaveBeenCalledWith(payload);
    })

    it('should fail when the github personal access token is missing', async () => {
      process.env.GITHUB_PERSONAL_ACCESS_TOKEN = '';
      
      expect(repository.getRepositories).toThrow('Missing Access Token from enviroment configuration');
    })
  });
});
