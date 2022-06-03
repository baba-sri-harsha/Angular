import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadjetsComponent } from './gadjets.component';

describe('GadjetsComponent', () => {
  let component: GadjetsComponent;
  let fixture: ComponentFixture<GadjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GadjetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GadjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
