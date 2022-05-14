import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiativePrComponent } from './initiative-pr.component';

describe('InitiativePrComponent', () => {
  let component: InitiativePrComponent;
  let fixture: ComponentFixture<InitiativePrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiativePrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiativePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
