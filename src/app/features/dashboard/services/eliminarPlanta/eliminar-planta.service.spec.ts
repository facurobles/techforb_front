import { TestBed } from '@angular/core/testing';

import { EliminarPlantaService } from './eliminar-planta.service';

describe('EliminarPlantaService', () => {
  let service: EliminarPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
