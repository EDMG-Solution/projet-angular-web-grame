import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteDateSaisieComponent } from './limite-date-saisie.component';

describe('LimiteDateSaisieComponent', () => {
  let component: LimiteDateSaisieComponent;
  let fixture: ComponentFixture<LimiteDateSaisieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteDateSaisieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiteDateSaisieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
