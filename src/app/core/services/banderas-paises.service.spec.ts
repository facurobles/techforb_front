import { TestBed } from '@angular/core/testing';

import { BanderasPaisesService } from './banderas-paises.service';

describe('BanderasPaisesService', () => {
  let service: BanderasPaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanderasPaisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
