import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvancementDetailleComponent } from './avancement-detaille.component';

describe('AvancementDetailleComponent', () => {
  let component: AvancementDetailleComponent;
  let fixture: ComponentFixture<AvancementDetailleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvancementDetailleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvancementDetailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
