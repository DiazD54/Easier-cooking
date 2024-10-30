import { Test, TestingModule } from '@nestjs/testing';
import { TutorialesService } from './tutoriales.service';

describe('TutorialesService', () => {
  let service: TutorialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorialesService],
    }).compile();

    service = module.get<TutorialesService>(TutorialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
