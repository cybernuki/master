import { Test, TestingModule } from '@nestjs/testing';
import { NomenclatureService } from '../nomenclature.service';

describe('NomenclatureService', () => {
  let service: NomenclatureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NomenclatureService],
    }).compile();

    service = module.get<NomenclatureService>(NomenclatureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateSine', () => {
    it('should return 0 when times is 0', async () => {
      const params = {sumA:10, sumB:10, times: 0};
      expect(service.calculateSine(params)).toBe(0);
    })
  });
});
