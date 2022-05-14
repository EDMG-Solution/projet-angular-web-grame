import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbFinancierComponent } from './tdb-financier.component';

describe('TdbFinancierComponent', () => {
  let component: TdbFinancierComponent;
  let fixture: ComponentFixture<TdbFinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdbFinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TdbFinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
