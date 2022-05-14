import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviFinancierComponent } from './suivi-financier.component';

describe('SuiviFinancierComponent', () => {
  let component: SuiviFinancierComponent;
  let fixture: ComponentFixture<SuiviFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviFinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
