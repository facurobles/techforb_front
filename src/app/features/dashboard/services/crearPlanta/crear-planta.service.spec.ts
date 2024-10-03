import { TestBed } from '@angular/core/testing';

import { CrearPlantaService } from './crear-planta.service';

describe('CrearPlantaService', () => {
  let service: CrearPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
