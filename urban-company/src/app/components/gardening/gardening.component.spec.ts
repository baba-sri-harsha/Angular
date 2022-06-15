import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GardeningComponent } from './gardening.component';

describe('GardeningComponent', () => {
  let component: GardeningComponent;
  let fixture: ComponentFixture<GardeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GardeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
