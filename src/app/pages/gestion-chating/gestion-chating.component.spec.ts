import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChatingComponent } from './gestion-chating.component';

describe('GestionChatingComponent', () => {
  let component: GestionChatingComponent;
  let fixture: ComponentFixture<GestionChatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionChatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionChatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
