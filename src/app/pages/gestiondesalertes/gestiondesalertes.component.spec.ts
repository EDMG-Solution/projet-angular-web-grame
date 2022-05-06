import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiondesalertesComponent } from './gestiondesalertes.component';

describe('GestiondesalertesComponent', () => {
  let component: GestiondesalertesComponent;
  let fixture: ComponentFixture<GestiondesalertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestiondesalertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiondesalertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
