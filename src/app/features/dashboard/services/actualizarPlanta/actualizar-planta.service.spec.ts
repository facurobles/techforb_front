import { TestBed } from '@angular/core/testing';

import { ActualizarPlantaService } from './actualizar-planta.service';

describe('ActualizarPlantaService', () => {
  let service: ActualizarPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualizarPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
