import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDesProfilsComponent } from './gestion-des-profils.component';

describe('GestionDesProfilsComponent', () => {
  let component: GestionDesProfilsComponent;
  let fixture: ComponentFixture<GestionDesProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDesProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDesProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
