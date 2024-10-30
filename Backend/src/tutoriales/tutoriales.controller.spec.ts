import { Test, TestingModule } from '@nestjs/testing';
import { TutorialesController } from './tutoriales.controller';

describe('TutorialesController', () => {
  let controller: TutorialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorialesController],
    }).compile();

    controller = module.get<TutorialesController>(TutorialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
