import { TestBed } from '@angular/core/testing';

import { MetricasPlantasService } from './metricas-planta.service';

describe('MetricasPlantaService', () => {
  let service: MetricasPlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetricasPlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
