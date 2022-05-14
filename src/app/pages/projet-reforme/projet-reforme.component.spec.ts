import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetReformeComponent } from './projet-reforme.component';

describe('ProjetReformeComponent', () => {
  let component: ProjetReformeComponent;
  let fixture: ComponentFixture<ProjetReformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetReformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetReformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
