import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LimiteRemonteProblemeComponent } from './limite-remonte-probleme.component';

describe('LimiteRemonteProblemeComponent', () => {
  let component: LimiteRemonteProblemeComponent;
  let fixture: ComponentFixture<LimiteRemonteProblemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LimiteRemonteProblemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimiteRemonteProblemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
