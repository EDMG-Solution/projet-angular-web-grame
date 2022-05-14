import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeSectComponent } from './programme-sect.component';

describe('ProgrammeSectComponent', () => {
  let component: ProgrammeSectComponent;
  let fixture: ComponentFixture<ProgrammeSectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammeSectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeSectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
