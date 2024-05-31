import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModelingController } from './database-modeling.controller';

describe('DatabaseModelingController', () => {
  let controller: DatabaseModelingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseModelingController],
    }).compile();

    controller = module.get<DatabaseModelingController>(DatabaseModelingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
