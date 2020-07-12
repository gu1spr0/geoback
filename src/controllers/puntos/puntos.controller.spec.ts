import { Test, TestingModule } from '@nestjs/testing';
import { PuntosController } from './puntos.controller';

describe('Puntos Controller', () => {
  let controller: PuntosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuntosController],
    }).compile();

    controller = module.get<PuntosController>(PuntosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
