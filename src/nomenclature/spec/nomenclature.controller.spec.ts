import { Test, TestingModule } from '@nestjs/testing';
import { NomenclatureController } from '../nomenclature.controller';
import { NomenclatureService } from '../nomenclature.service';

describe('NomenclatureController', () => {
  let controller: NomenclatureController;
  let nomenclatureService: NomenclatureService;

  const serviceMock = {
    calculateSine: jest.fn().mockReturnValue(10),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NomenclatureController],
      providers: [
        {
          provide: NomenclatureService,
          useValue: serviceMock,
        }
      ]
    }).compile();

    controller = module.get<NomenclatureController>(NomenclatureController);
    nomenclatureService = module.get<NomenclatureService>(NomenclatureService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('calculateSine', () => {
    it('should call service correctly', async () => {
      const params = {sumA:10, sumB:10, times: 10};
      expect(controller.calculateSine(params)).toBe(10);
      expect(nomenclatureService.calculateSine).toHaveBeenCalledWith(params);
    })
  });
});
