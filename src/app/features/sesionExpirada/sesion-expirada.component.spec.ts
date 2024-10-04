import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionExpiradaComponent } from './sesion-expirada.component';

describe('SesionExpiradaComponent', () => {
  let component: SesionExpiradaComponent;
  let fixture: ComponentFixture<SesionExpiradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionExpiradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionExpiradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
