import { Test, TestingModule } from '@nestjs/testing';
import { GithubConsumingController } from '../github-consuming.controller';
import { GithubConsumingService } from '../github-consuming.service';

describe('GithubConsumingController', () => {
  const serviceMock = {
    findGoogleRepositories: jest.fn(),
  };

  let controller: GithubConsumingController;
  let githubService: GithubConsumingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GithubConsumingController],
      providers: [
        {
          provide: GithubConsumingService,
          useValue: serviceMock,
        }
      ]
    }).compile();

    controller = module.get<GithubConsumingController>(GithubConsumingController);
    githubService = module.get<GithubConsumingService>(GithubConsumingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllRepositories', () => {
    it('should call service correctly', async () => {
      const params = {per_page: 10};
      await expect(controller.findGoogleRepositories(params)).resolves;
      expect(githubService.findGoogleRepositories).toHaveBeenCalledWith(params);
    })
  });
});
