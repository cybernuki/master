import { Test, TestingModule } from '@nestjs/testing';
import { LogicalThinkingService } from '../logical-thinking.service';

describe('LogicalThinkingService', () => {
  let service: LogicalThinkingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogicalThinkingService],
    }).compile();

    service = module.get<LogicalThinkingService>(LogicalThinkingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getOddList', () => {
    it('should return all odd numbers to 9', async () => {
      const params = {target: 9};
      expect(service.getOddList(params)).toStrictEqual([1,3,5,7,9]);
    })
  });

});
