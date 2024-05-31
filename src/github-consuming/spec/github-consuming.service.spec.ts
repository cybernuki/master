import { Test, TestingModule } from '@nestjs/testing';
import { GithubConsumingService } from '../github-consuming.service';
import { GithubConsumingRepository } from '../github-consuming.repository';
import { Observable } from 'rxjs';

describe('GithubConsumingService', () => {
  const repositoryMock = {
    getRepostories: jest.fn(),
  };
  let service: GithubConsumingService;
  let githubRepository: GithubConsumingRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GithubConsumingService,
        {
          provide: GithubConsumingRepository,
          useValue: repositoryMock,
        }
      ]
    }).compile();

    service = module.get<GithubConsumingService>(GithubConsumingService);
    githubRepository = module.get<GithubConsumingRepository>(GithubConsumingRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllRepositories', () => {
    it('should call repository correctly', async () => {
      const params = { per_page: 10 };
      githubRepository.getRepositories = jest.fn().mockReturnValue(
        new Observable(observer => observer.next({
          data: { items: [] },
        }))
      )
      await expect(service.findGoogleRepositories(params)).resolves;
      expect(githubRepository.getRepositories).toHaveBeenCalledWith(params.per_page);
    })

    it('should fail when observable from repository catch an error', async () => {
      const params = { per_page: 10 };
      githubRepository.getRepositories = jest.fn().mockReturnValue(
        new Observable(observer => observer.error('mock error'))
      )
      await expect(service.findGoogleRepositories(params)).rejects.toEqual('Error while searching for public repositories');
      expect(githubRepository.getRepositories).toHaveBeenCalledWith(params.per_page);
    })
  });
});
