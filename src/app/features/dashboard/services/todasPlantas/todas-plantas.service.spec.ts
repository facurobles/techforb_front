import { TestBed } from '@angular/core/testing';

import { TodasPlantasService } from './todas-plantas.service';

describe('TodasPlantasService', () => {
  let service: TodasPlantasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodasPlantasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
