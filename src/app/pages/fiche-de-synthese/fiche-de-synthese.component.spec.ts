import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDeSyntheseComponent } from './fiche-de-synthese.component';

describe('FicheDeSyntheseComponent', () => {
  let component: FicheDeSyntheseComponent;
  let fixture: ComponentFixture<FicheDeSyntheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheDeSyntheseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheDeSyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
