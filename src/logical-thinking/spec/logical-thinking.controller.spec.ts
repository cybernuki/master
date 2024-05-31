import { Test, TestingModule } from '@nestjs/testing';
import { LogicalThinkingController } from '../logical-thinking.controller';
import { LogicalThinkingService } from '../logical-thinking.service';

describe('LogicalThinkingController', () => {
  let controller: LogicalThinkingController;
  let logicalThinkingService: LogicalThinkingService;
  const mockService = {
    getOddList: jest.fn().mockReturnValue([])
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogicalThinkingController],
      providers: [{
        provide: LogicalThinkingService,
        useValue: mockService
      }]
    }).compile();

    controller = module.get<LogicalThinkingController>(LogicalThinkingController);
    logicalThinkingService = module.get<LogicalThinkingService>(LogicalThinkingService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getOddList', () => {
    it('should call service correctly', async () => {
      const params = {target: 11};
      expect(controller.getOddList(params)).toStrictEqual([]);
      expect(logicalThinkingService.getOddList).toHaveBeenCalledWith(params);
    })
  });
});
